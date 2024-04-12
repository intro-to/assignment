console.log("start");
function loginUser(email, password) {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      callback({ userEmail: email });
    }, 1500);
  });
}
function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Now we have the data");
      callback(["video1", "video2", "video3"]);
    }, 2000);
  });
}
function videoDetails(video, callback) {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Now we have the data");
      callback("title of the video");
    }, 2000);
  });
}
// const user = loginUser("devedf@goomail.com", 123456, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

loginUser("ed", "barbie")
  .then((user) => getUserVideos(user.email))
  .then((video) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

//SYNC
// const user = loginUser("ed", "sdf");
// const videos = videoDetails(user . email);
async function displayUser() {
  try {
    const loginUser = await loginUser("ed", 13485);
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
  } catch (err) {
    console.log("We could no get the videos");
  }
}

displayUser();

// console.log("Finish");

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("getting stuff from yotuube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("stuff from fb");
    resolve({ user: "Name" });
  }, 3000);
});

promise.all([yt, fb]).then((result) => console.log(result));
