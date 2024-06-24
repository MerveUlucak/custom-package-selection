'use client'
import React, { useState } from 'react'
import { SlBasket } from 'react-icons/sl'
import PackageList from './PackageList'

const Layout = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleProductClick = (productName) => {
    setSelectedProduct(productName)
  }
  return (
    <div>
      <header>
        <div className="header">
          <div className="header-beije">
            <h1>beije.</h1>
          </div>
          <nav>
            <ul className="header-sections">
              <li>
                <a href="#urunler" style={{ textDecoration: 'none' }}>
                  Ürünler
                </a>
              </li>
              <li>
                <a href="#bizkimiz" style={{ textDecoration: 'none' }}>
                  Biz Kimiz?
                </a>
              </li>
              <li>
                <a href="#bagiskulturu" style={{ textDecoration: 'none' }}>
                  Bağış Kültürü
                </a>
              </li>
              <li>
                <a href="#regltesti" style={{ textDecoration: 'none' }}>
                  Regl Testi!
                </a>
              </li>
              <li>
                <a
                  href="#kendipaketiniolustur"
                  style={{ textDecoration: 'none' }}
                >
                  Kendi Paketini Oluştur
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <SlBasket size={24} style={{ marginRight: '20px' }} />
            <img
              src="/images/login.png"
              alt="login"
              style={{ width: '24px' }}
            />
          </div>
        </div>
        <div>
          <div className="packed">
            {' '}
            <h1>Kendi Paketini Oluştur</h1>
            <h4>Nasıl Çalışır?</h4>
          </div>
          <p>
            Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
            miktarlardan, sana özel bir paket oluşturalım.
          </p>
          <div className="products">
            <button
              className="beije-ped"
              onClick={() => handleProductClick('beije Ped')}
            >
              beije Ped
            </button>
            <button onClick={() => handleProductClick('beije Günlük Ped')}>
              beije Günlük Ped
            </button>
            <button onClick={() => handleProductClick('beije Tampon')}>
              beije Tampon
            </button>
          </div>
        </div>
      </header>

      {selectedProduct && (
        <div className="product-tabs">
          {selectedProduct === 'beije Ped' && (
            <div className="tab-content">
              <PackageList title="Standart Ped"></PackageList>
              <PackageList title="Süper Ped"></PackageList>
              <PackageList title="Süper+ Ped"></PackageList>
            </div>
          )}
          {selectedProduct === 'beije Günlük Ped' && (
            <div className="tab-content">
              <PackageList title="Günlük Ped" />
              <PackageList title="Süper Günlük Ped" />
            </div>
          )}
          {selectedProduct === 'beije Tampon' && (
            <div className="tab-content">
              <PackageList title="Mini Tampon" />
              <PackageList title="Standart Tampon" />
              <PackageList title="Süper Tampon" />
            </div>
          )}
        </div>
      )}

      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Beije.Tüm hakları saklıdır.</p>
        <p>KVKK</p>
        <p>KVKK Başvuru Formu</p>
        <p>Üyelik Sözleşmesi</p>
        <p>Gizlilik Politikası</p>
        <p>Çerezlik Politikası</p>
        <p>Test Sonuçları </p>{' '}
      </footer>
    </div>
  )
}

export default Layout
