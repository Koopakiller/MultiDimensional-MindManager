namespace Koopakiller.Apps.Picosmos.Explorer.Models
{
    public partial class Explorer_CircularReferences
    {
        public Explorer_CircularReferences Copy()
        {
            return new Explorer_CircularReferences()
            {
                Id = this.Id,
                ChainId = this.ChainId,
                ChainPosition = this.ChainPosition,
                SourceTableName = this.SourceTableName,
                SourceColumnName = this.SourceColumnName,
                TargetTableName = this.TargetTableName,
                TargetColumnName = this.TargetColumnName,
            };
        }
    }
}