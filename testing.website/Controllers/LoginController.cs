using Microsoft.AspNetCore.Mvc;
using testing.website.Models;

namespace testing.website.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View("Index");
        }

        [HttpPost]
        public IActionResult Index(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (model.Email == "test1@test.com")
                    return RedirectToAction("Index", "Search", new { id = 1 });
                if (model.Email == "test2@test.com")
                    return RedirectToAction("Index", "Search", new { id = 2 });

                ModelState.AddModelError("Email", "User could not be found");
            }

            return View("Index", model);
        }
    }
}