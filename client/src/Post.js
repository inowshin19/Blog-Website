export default function Post(){
    return(
        // <div className='container mb-2'>
        //     <div className="row">
        //         <div className="col-md-12 border">
        //             <div className="row">
        //                 <div className="col-md-8" style={{ background: 'blue'}} > bye</div>
        //                 <div className="col-md-4">hello</div>
        //             </div>
        //
        //
        //         </div>
        //     </div>
        // </div>


        <div className="entry">

            <div className="image">
                <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt=""/>
            </div>
            <div className="text">
                <h2>Wallpaper Images to Your Website</h2>
                <p className="info">
                    <span className="author">Israt Nowshin</span>
                    <time>2023-09-24 11:20</time>
                </p>
                <p className="summary">The downside of stretching out a small image to cover the entire page is that the image loses quality and becomes blurry as its being stretched. In this case, you should consider that before using a small image as the background image for your website.</p>
            </div>
        </div>
    );
}