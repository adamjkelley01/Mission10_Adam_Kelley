using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Mission10_Kelley_Adam_back.Data;

public class Team
{
  
    [Key]
    [Required]
    public int TeamID { get; set; }

    public string? TeamName { get; set; } = null!;

    public int? CaptainID { get; set; }

}
