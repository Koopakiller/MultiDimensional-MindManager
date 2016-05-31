using GalaSoft.MvvmLight;
using PostSharp.Patterns.Model;

namespace Koopakiller.Apps.MultiDimensionalMindManager.ViewModel
{
    [NotifyPropertyChanged]
    public class HamburgerMenuItemViewModel:ViewModelBase
    {
        public string Header { get; set; }

        public ViewModelBase ViewModel { get; set; }

        public string Glyph { get; set; }
    }
}
