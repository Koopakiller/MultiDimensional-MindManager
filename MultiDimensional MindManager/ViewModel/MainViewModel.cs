using System.Collections.Generic;
using System.Collections.ObjectModel;
using GalaSoft.MvvmLight;
using PostSharp.Patterns.Model;

namespace Koopakiller.Apps.MultiDimensionalMindManager.ViewModel
{
    [NotifyPropertyChanged]
    public class MainViewModel : ViewModelBase
    {
        public MainViewModel()
        {
            this.HamburgerMenuItems = new ObservableCollection<HamburgerMenuItemViewModel>()
            {
                new HamburgerMenuItemViewModel()
                {
                    Header = "Home",
                    Glyph = "\uE10F",
                    ViewModel = new HomeViewModel(),
                },
                new HamburgerMenuItemViewModel()
                {
                    Header = "Dimensions",
                    Glyph = "\uEC0A",
                    ViewModel = new DimensionsViewModel(),
                },
                new HamburgerMenuItemViewModel()
                {
                    Header = "About",
                    Glyph = "\uE946",
                    ViewModel = new AboutViewModel(),
                },
            };
        }

        public IList<HamburgerMenuItemViewModel> HamburgerMenuItems { get; }
    }
}
