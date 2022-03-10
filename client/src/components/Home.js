function Home({ user }) {
 const home_img = "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png"
 const log_in_img = "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/Elden-Ring-Kung-Fu-panda-meme-cropped.jpg"
    if (user) {
      return (
      <div>
      <h1>Welcome, {user.username}! You are logged in! </h1>
      <img src={log_in_img} alt="Inner Peace" style={{ width: "100%" }}></img>
      </div>
      )
    } else {
      return (
        <div>
        <h1>Not logged in</h1>
        <img src={home_img} alt="Kneeling Knight"></img>
      </div>
      )
    }
  }
  
  export default Home;
  