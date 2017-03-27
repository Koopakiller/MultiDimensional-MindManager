﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Koopakiller.Apps.Picosmos.Explorer.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class Entities : DbContext
    {
        public Entities()
            : base("name=Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Currency> Currencies { get; set; }
        public virtual DbSet<CurrencyIdentifier> CurrencyIdentifiers { get; set; }
        public virtual DbSet<HumanGroup> HumanGroups { get; set; }
        public virtual DbSet<HumanRelationKind> HumanRelationKinds { get; set; }
        public virtual DbSet<Place> Places { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<ComplexRelation> ComplexRelations { get; set; }
        public virtual DbSet<Human> Humans { get; set; }
        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<ResumeKind> ResumeKinds { get; set; }
        public virtual DbSet<Resume> Resumes { get; set; }
        public virtual DbSet<HumanRelation> HumanRelations { get; set; }
    
        public virtual ObjectResult<Explorer_GetTablesAndColumns_Result> Explorer_GetTablesAndColumns()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Explorer_GetTablesAndColumns_Result>("Explorer_GetTablesAndColumns");
        }
    
        public virtual ObjectResult<Explorer_GetTableColumns_Result> Explorer_GetTableColumns(string tableName)
        {
            var tableNameParameter = tableName != null ?
                new ObjectParameter("tableName", tableName) :
                new ObjectParameter("tableName", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Explorer_GetTableColumns_Result>("Explorer_GetTableColumns", tableNameParameter);
        }
    
        public virtual ObjectResult<Explorer_GetLinkedCells_Result> Explorer_GetLinkedCells(string tableName, string columnName, Nullable<int> id)
        {
            var tableNameParameter = tableName != null ?
                new ObjectParameter("tableName", tableName) :
                new ObjectParameter("tableName", typeof(string));
    
            var columnNameParameter = columnName != null ?
                new ObjectParameter("columnName", columnName) :
                new ObjectParameter("columnName", typeof(string));
    
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<Explorer_GetLinkedCells_Result>("Explorer_GetLinkedCells", tableNameParameter, columnNameParameter, idParameter);
        }
    }
}
