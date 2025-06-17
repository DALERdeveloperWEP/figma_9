// console.log(document.scrollingElement);

// window.addEventListener('scroll', () => {
//   console.log('HTML scrollTop:', document.documentElement.scrollTop);
//   console.log('BODY scrollTop:', document.body.scrollTop);
// });


// // document.querySelectorAll('*').forEach(el => {
// //   if (el.scrollHeight > el.clientHeight + 5) {
// //     console.log('Scroll bor:', el);
// //   }
// // });

// document.querySelectorAll('*').forEach(el => {
//   if (el.scrollHeight > el.clientHeight + 1) {
//     console.log('🟢 SCROLL BOR:', el);
//   }
// });

// let old = 0;

// setInterval(() => {
//   document.querySelectorAll('*').forEach(el => {
//     if (el.scrollTop && el.scrollTop !== old) {
//       console.log('🟥 SCROLL QILINAYOTGAN ELEMENT:', el, 'scrollTop:', el.scrollTop);
//       old = el.scrollTop;
//     }
//   });
// }, 500);

// console.log('scrollingElement:', document.scrollingElement);




// document.querySelectorAll('*').forEach(el => {
//   if (el.scrollHeight > el.clientHeight + 1) {
//     console.log('🟢 SCROLL BOR:', el);
//   }
// });

// let old = 0;

// setInterval(() => {
//   document.querySelectorAll('*').forEach(el => {
//     if (el.scrollTop && el.scrollTop !== old) {
//       console.log('🟥 SCROLL QILINAYOTGAN ELEMENT:', el, 'scrollTop:', el.scrollTop);
//       old = el.scrollTop;
//     }
//   });
// //   window.scrollTo({ top: 0, behavior: 'smooth' });

// // Hamma elementlarga kuzatuv qo‘yamiz
// const all = document.querySelectorAll('*');

// // Observer yaratiladi
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.background = 'red'; // ko‘rinayotgan element — qizil
//     } else {
//       entry.target.style.background = ''; // ko‘rinmayotgan — rangi olib tashlanadi
//     }
//   });
// }, {
//   threshold: 0.5 // element yarimdan ko‘p ko‘rinsa, aktiv bo‘ladi
// });

// // Hamma elementlarga qo‘llaymiz
// all.forEach(el => observer.observe(el));



// }, 500);
