'use client';
import { useState, useRef } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
    const [accountSubTab, setAccountSubTab] = useState(null);
      const [showAddressForm, setShowAddressForm] = useState(false);
        const [aiOpen, setAiOpen] = useState(false);
          const [aiInput, setAiInput] = useState('');
            
              // Professional Address State
                const [user, setUser] = useState({ 
                    name: 'Utkarsh Pawar', 
                        mobile: '9876543210',
                            area: 'Bairagarh, 3 EME Road',
                                city: 'Bhopal',
                                    pincode: '462030'
                                      });

                                        const [cart, setCart] = useState([{ id: 101, name: 'Smartwatch', price: 1299, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500', size: 'Free', qty: 1 }]);
                                          const [chatLogs, setChatLogs] = useState([{ sender: 'bot', text: 'Order ID #ZENVRO-101?' }]);

                                            return (
                                                <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif', paddingBottom: '70px' }}>
                                                      {/* 🔝 HEADER */}
                                                            <div style={{ backgroundColor: '#0f172a', padding: '15px', color: '#fff', position: 'sticky', top: 0, zIndex: 40 }}>
                                                                    <span style={{ fontSize: '18px', fontWeight: '900', color: '#38bdf8' }}>ZENVRO STORE</span>
                                                                          </div>

                                                                                {/* 🏠 HOME CONTENT */}
                                                                                      {activeTab === 'home' && <div style={{ padding: '20px' }}><h3>Welcome, {user.name}!</h3><p>Start Shopping!</p></div>}
      {/* 🛒 CART PAGE */}
            {activeTab === 'cart' && (
                    <div style={{ padding: '15px' }}>
                              <h4>Delivery Address</h4>
                                        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
                                                    <div><b>{user.name}</b> | {user.mobile}</div>
                                                                <div style={{ fontSize: '12px', marginTop: '5px' }}>{user.area}, {user.city} - {user.pincode}</div>
                                                                            <button onClick={() => setShowAddressForm(true)} style={{ width: '100%', marginTop: '10px', padding: '10px', background: '#8b5cf6', color: '#fff', border: 'none', borderRadius: '6px' }}>Edit Address</button>
                                                                                      </div>

                                                                                                {/* EDIT FORM */}
                                                                                                          {showAddressForm && (
                                                                                                                      <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 99, padding: '20px', display: 'flex', alignItems: 'center' }}>
                                                                                                                                    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', width: '100%' }}>
                                                                                                                                                    <input placeholder="Name" value={user.name} onChange={e => setUser({...user, name: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
                                                                                                                                                                    <input placeholder="Mobile" value={user.mobile} onChange={e => setUser({...user, mobile: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
                                                                                                                                                                                    <input placeholder="Area" value={user.area} onChange={e => setUser({...user, area: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
                                                                                                                                                                                                    <input placeholder="City" value={user.city} onChange={e => setUser({...user, city: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
                                                                                                                                                                                                                    <input placeholder="Pincode" value={user.pincode} onChange={e => setUser({...user, pincode: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
                                                                                                                                                                                                                                    <button onClick={() => setShowAddressForm(false)} style={{ width: '100%', padding: '12px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '6px' }}>Save Address</button>
                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                      )}

                                                                                                                                                                                                                                                                                            {/* 📱 NAVIGATION */}
                                                                                                                                                                                                                                                                                                  <div style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '15px', borderTop: '1px solid #ddd' }}>
                                                                                                                                                                                                                                                                                                          <div onClick={() => setActiveTab('home')}>🏠 Home</div>
                                                                                                                                                                                                                                                                                                                  <div onClick={() => setActiveTab('cart')}>🛒 Cart</div>
                                                                                                                                                                                                                                                                                                                          <div onClick={() => setActiveTab('account')}>👤 Acc</div>
                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                   