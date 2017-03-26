using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Threading.Tasks;
using System.Xml.Serialization;
using Windows.Storage;

namespace Koopakiller.Apps.MultiDimensionalMindManager.Model
{
    public class DataContainer
    {
        public IList<Entry> Entries { get; } = new List<Entry>();

        public IList<IDimension> Dimensions { get; } = new List<IDimension>();

        public async Task SaveAsync(IStorageFile file)
        {

            var tempFolder = await ApplicationData.Current.TemporaryFolder.CreateFolderAsync("DataContainer", CreationCollisionOption.GenerateUniqueName);
            var mdma = await tempFolder.CreateFolderAsync("mdma");

            var entriesFile = await mdma.CreateFileAsync("entries.xml");
            await XmlSerializationHelper.SerializeAsync(entriesFile, this.Entries);

            var dimensionsFile = await mdma.CreateFileAsync("dimensions.xml");
            await XmlSerializationHelper.SerializeAsync(dimensionsFile, this.Dimensions);

            ZipFile.CreateFromDirectory(tempFolder.Path, file.Path);
            await tempFolder.DeleteAsync();
        }

        public static async Task<DataContainer> LoadAsync(IStorageFile file)
        {
            //return await XmlSerializationHelper.DeserializeAsync<DataContainer>(file);
            throw new NotImplementedException();
        }
    }

    public static class XmlSerializationHelper
    {
        public static async Task SerializeAsync<T>(IStorageFile file, T o)
        {
            var seri = new XmlSerializer(typeof(DataContainer));
            using (var stream = await file.OpenStreamForWriteAsync())
            {
                seri.Serialize(stream, o);
            }
        }
        public static async Task<T> DeserializeAsync<T>(IStorageFile file)
        {
            var seri = new XmlSerializer(typeof(DataContainer));
            using (var stream = await file.OpenStreamForReadAsync())
            {
                return (T)seri.Deserialize(stream);
            }
        }
    }

    public class Entry
    {
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class DimensionValue<T>
    {
        public DimensionValue()
        {

        }

        public T Value { get; set; }

        public IList<Entry> Entries { get; } = new List<Entry>();
    }

    public interface IDimension
    {

    }

    public class LinearDimension<T> : IDimension
    {
        public string Name { get; set; }

        public DimensionValue<T> Value { get; set; }
    }
    public class DateTimeDimension : LinearDimension<DateTime>
    {


    }


    //public interface IValueParent
    //{
    //    string Name { get; set; }
    //}

    //public class GroupListContainer<T> : IValueParent
    //{
    //    private readonly List<GroupList<DimensionValue<T>>> _items = new List<GroupList<DimensionValue<T>>>();

    //    public string Name { get; set; }



    //}
    //public class GroupList<T> : IValueParent
    //{
    //    public GroupList(GroupListContainer<T> container)
    //    {

    //    }

    //    private readonly List<DimensionValue<T>> _items = new List<DimensionValue<T>>();

    //    public string Name { get; set; }


    //}

    //public class CombinationList<T>
    //{
    //    private readonly List<WeightedValueContainer<T>> _items = new List<WeightedValueContainer<T>>();
    //}

    //public class Tree<T>
    //{

    //}

    //public class LinearTree<T>
    //{

    //}

}