//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class HumanRelation
    {
        public int Id { get; set; }
        public int RelationKind { get; set; }
        public int HumanId { get; set; }
        public int RelatedHumanId { get; set; }
    
        public virtual HumanRelationKind HumanRelationKind { get; set; }
        public virtual Human Human { get; set; }
        public virtual Human Human1 { get; set; }
    }
}
