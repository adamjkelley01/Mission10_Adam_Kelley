using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mission10_Kelley_Adam_back.Data;

public class Bowler
{
    [Key]
    [Required]
    public int BowlerID { get; set; }

    public string? BowlerLastName { get; set; }

    public string? BowlerFirstName { get; set; }

    public string? BowlerMiddleInit { get; set; }

    public string? BowlerAddress { get; set; }

    public string? BowlerCity { get; set; }

    public string? BowlerState { get; set; }

    public string? BowlerZip { get; set; }

    public string? BowlerPhoneNumber { get; set; }

    [Required]
    [ForeignKey("TeamID")]
    public int? TeamID { get; set; }

    public Team? Team { get; set; }
}
