namespace Koopakiller.Apps.Picosmos.Explorer.Models
{
    public partial class Explorer_GetDatabaseRelations_Result
    {
        public Explorer_CircularReferences ToTableEntry()
        {
            return new Explorer_CircularReferences()
            {
                SourceTableName = this.SourceTableName,
                SourceColumnName = this.SourceColumnName,
                TargetTableName = this.TargetTableName,
                TargetColumnName = this.TargetColumnName,
            };
        }
    }
}