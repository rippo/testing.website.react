using System.Linq; 
using Microsoft.AspNetCore.Mvc; 
using testing.website.Models; 

namespace testing.website.Controllers {
    public class SearchController:Controller {

        public IActionResult Index(int id) {
            var model = new SearchViewModel {Id = id }; 
            return View("Index", model); 
        }

        [HttpPost]
        public IActionResult Index(SearchViewModel model) {
            if (ModelState.IsValid) {
                model.Results = TestData.Fill()
                    .Where(w => w.Name.Contains(model.Query) && w.OwnerId == model.Id)
                    .ToList(); 
            }

            return View("Index", model); 
        }

    }
}
