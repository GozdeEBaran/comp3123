// async function sayHello() {

// }

// console.log(sayHello());

async function getPromise(a) {
  let myPromise = new Promise((resolve, reject) => {
    if (a > 10) {
      const obj = {
        status: true,
        message: `Promise resolved successfully: ${a}`,
        name: "Pritesh",
        age: 24,
      };
      resolve(obj);
    } else {
      const error = {
        status: false,
        message: "Promise rejected",
      };
      reject(error);
    }
  });
  return myPromise;
}

// Using async-await
// console.log(getPromise(15));

// Using async-await with try-catch
async function callPromise() {
  try {
    let response = await getPromise(20);
    console.log(response);

    response = await getPromise(50);
    console.log(response);

    response = await getPromise(25);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
callPromise();
