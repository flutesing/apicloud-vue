// const apiready = function() {
//     return new Promise(function(resolve, reject) {
//         if (window.api) {
//             resolve(api);
//         } else if (true) {
//             window.apiready = function () {
//                 resolve(api);
//             };
//         } else {
//             reject();
//         }
//     })
// }
//
// export default async function(){
//     try {
//         return apiready();
//     } catch (e) {
//         throw new Error (123);
//     }
// }



export default new Promise(function(resolve, reject) {
    if (window.api) {
        resolve(api);
    } else if(true){
        window.apiready = function() {
            resolve(api);
        };
    } else {
        reject();
    }
});

