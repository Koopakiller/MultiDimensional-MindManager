--Code from http://stackoverflow.com/a/43163233/1623754

--is used in Explorer_GetDataFromTableColumnValue

CREATE FUNCTION [dbo].[udf-EAV](@XML xml)
Returns Table 
As
Return (
    with cteKey(k) as 
    (
        Select Top 1 xAtt.value('local-name(.)','varchar(100)') 
        From @XML.nodes('/row') As A(xRow) 
        Cross Apply A.xRow.nodes('./@*') As B(xAtt)
    )    

    Select Entity    = xRow.value('@*[1]','varchar(50)')
          ,Attribute = xAtt.value('local-name(.)','varchar(100)')
          ,Value     = xAtt.value('.','varchar(max)') 
    From  @XML.nodes('/row') As A(xRow)
    Cross Apply A.xRow.nodes('./@*') As B(xAtt)
    Where xAtt.value('local-name(.)','varchar(100)') Not In (Select k From cteKey)
)

-- Notes:  First Field in Query will be the Entity
-- Select * From [dbo].[udf-EAV]((Select UTCDate=GetUTCDate(),* From sys.dm_os_sys_info for XML RAW))