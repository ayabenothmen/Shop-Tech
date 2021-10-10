import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title" id="colorpage">Shop-Tech</h5>
              <p>
              Lorem ipsum dolor sit amet, consecte <br />
              sed do eiusmod tempor incididunt ut <br />
              Ut enim ad minim veniam, quis nostr <br />
              nisi ut aliquip ex ea commodo conseq<br />
              </p>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title" id="colorpage">Pages</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">Cart</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">Contact us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">Profile</a>
                </li>
              </ul>
            </MDBCol>
            
            <MDBCol md="2">
              <h5 className="title" id="colorpage">User Section</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">Home</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">Registration</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">LogIn</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!" id="colorLinks">LogOut</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title" id="colorpage">Get News</h5>
            
                
                <p className="text-muted">
                     Ne manquez pas nos derniers produits de mise à jour..
                </p>
                
                <form action=""  target="popupwindow" onsubmit="">
                    <div className="input-group">
                        
                        <input type="text" className="form-control" id ="form-controler"name="email"></input>
                        
                        <span className="input-group-btn">
                            <input type="submit" value="subscribe" className="btn ml-1" id="subscribe_btn"></input>
                        </span>
                        
                    </div>
                </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <hr />
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default Footer
