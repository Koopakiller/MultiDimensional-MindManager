namespace Koopakiller.Apps.Picosmos.Real.Common
{
    using System;
    using Microsoft.AspNetCore.Mvc;

    public class DataContainer<T>
    { 
        public T Data{ get; set; }
    }

    public static class DataContainer
    {
        public static DataContainer<T> Create<T>(T data)
        {
            return new DataContainer<T>() { Data = data, };
        }
    }
}
