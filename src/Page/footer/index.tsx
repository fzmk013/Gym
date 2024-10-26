
import Logo from "@/assets/Logo.png"

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo}/>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex perferendis quisquam explicabo dolores nulla mollitia tenetur, 
                        itaque accusamus, obcaecati fugiat molestiae quis eos dolorum enim repellendus.
                        Ratione in sequi incidunt. 
                    </p>

                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">amet consectetur adipisicing elit.</p>
                    <p className="my-5"> delectus vel minima</p>
                    <p>itaque soluta expedita corporis</p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Cotact Us</h4>
                    <p className="my-5">distinctio adipisci aut aliquidLorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptate debitis quasi suscipit at unde veritatis autem quis, dolore cumque aliquam eaque sed sit , facere magnam.</p>
                    <p className="my-5">nostrum quae voluptates autem</p>
                </div>

            </div>
    </footer>
  )
}

export default Footer