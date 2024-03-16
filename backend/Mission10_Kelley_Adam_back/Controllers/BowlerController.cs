using Microsoft.AspNetCore.Mvc;
using Mission10_Kelley_Adam_back.Data;

namespace Mission10_Kelley_Adam_back.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private IBowlerRepository _bowlerRepository;
        public BowlerController(IBowlerRepository temp) { 
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Object> Get()
        {
            var joinedData = from bowler in _bowlerRepository.Bowlers
                             join team in _bowlerRepository.Teams
                             on bowler.TeamID equals team.TeamID
                             where team.TeamName == "Marlins" || team.TeamName == "Sharks"
                             select new
                             {
                                 BowlerID = bowler.BowlerID,
                                 BowlerFirstName = bowler.BowlerFirstName,
                                 BowlerMiddleInit = bowler.BowlerMiddleInit,
                                 BowlerLastName = bowler.BowlerLastName,
                                 BowlerAddress = bowler.BowlerAddress,
                                 BowlerCity = bowler.BowlerCity,
                                 BowlerState = bowler.BowlerState,
                                 BowlerZip = bowler.BowlerZip,
                                 BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                                 TeamName = team.TeamName
                             };

            var joinedList = joinedData.ToList();

            return joinedList;
        }
    }
}
