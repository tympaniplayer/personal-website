using System.ComponentModel.DataAnnotations;

namespace PersonalWebsite.WebApi.Models
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "A valid email address is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
