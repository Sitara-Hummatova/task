//TASK
        //https://northwind.vercel.app/api/suppliers/ fetch metodu ile melumatlari localda yeni array-e (push) yazdirin
        //Melumatlari arrayda Paris şəhərinə görə (filter)ləyin
        //Məlumatları idlərinə görə çeşidləyin (sort)
        //https://northwind.vercel.app/api/suppliers/ Api-yə Yeni bir obyekt Post edin
        //https://northwind.vercel.app/api/suppliers/ hər hansı bir obyekti hər hansı bir məlumatı edit edin
        //https://northwind.vercel.app/api/suppliers/ hər hansı obyekti silin 

      1.
        const arr=[]

        // fetch(`https://northwind.vercel.app/api/suppliers`)
        //     .then((res) => res.json())
        //     .then((data) => {
        //       arr.push(data);
        //     });
        //   console.log(arr);


     2.

    //  fetch(`https://northwind.vercel.app/api/suppliers`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //         arr.push(data.filter((item)=>item.address.city=="Paris"));
           
    //         });
    //         console.log(arr)

    3.
    // fetch(`https://northwind.vercel.app/api/suppliers`)
    //        .then((res) => res.json())
    //        .then((data) => {
    //          data.sort((a,b)=>a.id-b.id);
    //        });
    //      console.log(arr);

    4.

    //  const Post = (musterDetallari) => {
    //     let url = `https://northwind.vercel.app/api/suppliers/`       
    //     fetch(url, {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     contactTitle: musterDetallari,
    //     }),
    //     })
    //     .then((res) => res.json())
    //     .then(data);
    //     };
 5.

//  const update = (id, musteriDetallari) => {
// 	fetch(`https://northwind.vercel.app/api/orders/${id}`, {
// 	method: "PATCH", //PUT
// 	headers: {
// 	"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify({
// 	customerId: musteriDetallari,
	
// 	}),
// 	})
// 	.then((res) => {
// 	return res.json()
// 	})
// 	.then((data) => {
// 	console.log(data);
// 	});
// 	}
	





        


         

