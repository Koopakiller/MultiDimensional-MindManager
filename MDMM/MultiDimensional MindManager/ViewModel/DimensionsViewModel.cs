using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Windows.Input;
using GalaSoft.MvvmLight;
using GalaSoft.MvvmLight.Command;

namespace Koopakiller.Apps.MultiDimensionalMindManager.ViewModel
{
    public class DimensionsViewModel : ViewModelBase
    {
        public DimensionsViewModel()
        {
            this.Trees = new ObservableCollection<TreeViewModel>();
            this.AddTreeCommand = new RelayCommand(this.AddTree);
            if (this.IsInDesignMode)
            {
                for (var i = 0; i < 10; ++i)
                {
                    var tree = new TreeViewModel()
                    {
                        Name = $"Sample Tree N° {i}",
                    };
                    for (var j = 0; j < i * 2 + 1; ++j)
                    {
                        tree.SubTrees.Add(new SubTreeViewModel()
                        {
                            Name = $"Sample SubTree N° {j}",
                        });
                    }
                    this.Trees.Add(tree);
                }
            }
        }


        public IList<TreeViewModel> Trees { get; }

        public ICommand AddTreeCommand { get; }

        private void AddTree()
        {
            var tree = new TreeViewModel
            {
                Name = "New Dimension Tree"
            };
            this.Trees.Add(tree);
        }
    }
    
    public class TreeViewModel
    {
        public TreeViewModel()
        {
            this.SubTrees = new ObservableCollection<SubTreeViewModel>();
        }

        public string Name { get; set; }

        public IList<SubTreeViewModel> SubTrees { get; }

    }
    
    public class SubTreeViewModel
    {
        public string Name { get; set; }
    }
}
