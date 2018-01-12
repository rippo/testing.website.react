using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace testing.website.Models
{
    public class SearchViewModel
    {
        public SearchViewModel()
        {
            Results = new List<SearchDto>();
        }

        public int Id { get; set; }
        [Required(ErrorMessage = "Enter a search term")]
        public string Query { get; set; }

        public List<SearchDto> Results { get; set; }
    }
}