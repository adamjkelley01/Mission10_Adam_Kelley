﻿using Microsoft.EntityFrameworkCore;

namespace Mission10_Kelley_Adam_back.Data;

public class BowlingLeagueContext : DbContext
{

    public BowlingLeagueContext(DbContextOptions<BowlingLeagueContext> options) : base(options) { }

    public DbSet<Bowler> Bowlers { get; set; }

    public DbSet<Team> Teams { get; set; }

}

