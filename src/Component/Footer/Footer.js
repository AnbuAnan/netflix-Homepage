import React from 'react'
import {FaFacebookSquare , FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import './footer.css'

export default function Footer() {
  return (
    <div className="main-footer" >
        <div className="containerf" style={{position:'relative',display:'flex'}}>
                
                <div className="row" >
                    <p><FaFacebookSquare/> <span style={{marginLeft:10}}></span><FaInstagram/> <span style={{marginLeft:10}}></span><FaTwitter/> <span style={{marginLeft:10}}></span><FaYoutube/> </p>
                    </div>
                <div className="tl">
                    
            
                <div className="list" style={{}}>
                
                    <ul>
                        <li>Seslendirme ve Alt Yazi</li>
                        <li>Medya Merkezi</li>
                        <li>Gizlilik</li>
                        <li>Bize Ulasin</li>
                    </ul>
                </div>

                <div className="list" style={{}}>
                    <p>   </p>
                    <ul>
                        <li>Sesli Betimleme</li>
                        <li>Yatirimci Iliskilert</li>
                        <li>Yasal Hukumler</li>
                    </ul>
                </div>

                <div className="list" style={{}}>
                    <ul>
                       <li>Yardim Merkezi</li>
                        <li>Is Imkanlari</li>
                        <li>Cerez Tercihleri</li>
                    </ul>
                </div>

                <div className="list" style={{}}>
                    <ul>
                        <li>Hediye Kartlari</li>
                        <li>Kullanim Kosullari</li>
                        <li>Kurumsal Bilgiler</li>
                    </ul>
                </div>

                </div>

                
            
            

            
        </div>

        <div className="bt">
                <button>Hizmet Kodu</button>
                <div>
                <p className="text" >
                    &copy; 1997-2001 Netflix, Inc. &#10100;i-0626d573a0ee099242&#10101;
                </p>
                </div>
            </div>

    </div>
  )
}
