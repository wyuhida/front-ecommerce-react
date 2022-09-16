import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MegaMenu extends Component {

    constructor(){
        super()
        // this.MegaMenu = this.MegaMenu.bind(this)
    }

    // componentDidMount(){
    //     this.MegaMenu()
    // }



    // MegaMenu(){
    //     var acc = document.getElementsByClassName("accordion")
    //     var accNum = acc.length
    //     for(var i=0; i<accNum; i++){
    //         acc[i].addEventListener("click", function(){
    //             this.classList.toggle("active")
    //             var panel = this.nextElementSibling
    //             if(panel.style.maxHeight){
    //                 panel.style.maxHeight = null
    //             }else{
    //                 panel.style.maxHeight = panel.scrollHeight+ "px"
    //             }
    //         })
    //     }
    // }

    MenuItemClick = (event) => {
        event.target.classList.toggle('active');
        var panel = event.target.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight+ "px"
        }
    }

     render() {
        const CatList = this.props.data
        const MyView = CatList.map((CatList,i) => {
            return (
                <div key={i.toString()}>
                     <button onClick={this.MenuItemClick} className="accordion">
                        <img alt='' className="accordionMenuIcon" src={CatList.category_image} />&nbsp; {CatList.category_name}
                    </button>
                    <div className="panel">
                        <ul>
                            
                            {
                                (CatList.subcategory_name).map((SubList,i)=>{
                                   return(
                                    <li key={i.toString()}>
                                        <Link to={
                                            "productsubcategory/"+CatList.category_name
                                            +"/"+SubList.subcategory_name
                                            } className="accordionItem" >{ SubList.subcategory_name }</Link>
                                        </li>
                                   )
                                })
                            }
                        </ul>
                    </div>

                </div>
            )
        })
          return (
            <div className="accordionMenuDiv">
                <div className="accordionMenuDivInside">
                    
                    {MyView}
                    {/* <button className="accordion">
                        <img alt='' className="accordionMenuIcon" src="https://image.flaticon.com/icons/png/128/739/739249.png" />&nbsp; Men's Clothing 
                    </button>
                    <div className="panel">
                        <ul>
                            <li><a href={'/#'} className='accordionItem' > Mans Tshirt 1</a></li>
                            <li><a href='' className="accordionItem" > Mans Tshirt 2</a></li>
                        </ul>
                    </div> */}




                </div>

            </div>
          )
     }
}

export default MegaMenu