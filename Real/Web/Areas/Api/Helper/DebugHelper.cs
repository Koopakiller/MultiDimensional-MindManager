namespace Koopakiller
{
    using System;
    using System.Diagnostics;

    public static class DebugHelper
    {
        public static void WriteException<T>(T exception)
            where T : Exception
        {
            Debug.WriteLine(exception.Message);
            if (exception.InnerException != null)
            {
                Debug.WriteLine("Inner Exception:");
                WriteException(exception.InnerException);
            }
        }
    }

}