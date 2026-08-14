'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
    const [accountSubTab, setAccountSubTab] = useState(null);
      const [showAddressForm, setShowAddressForm] = useState(false);
        const [orders, setOrders] = useState([]); 
          const [selectedOrder, setSelectedOrder] = useState(null);
            const [aiOpen, setAiOpen] = useState(false);
              
                const [user, setUser] = useState({ name: 'Utkarsh Pawar', mobile: '9876543210', area: 'Bairagarh', city: 'Bhopal', pincode: '462030' });
                  const [cart, setCart] = useState([{ id: 101, name: 'Smartwatch', price: 1299, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500' }]);

                    const placeOrder = () => {
                        const newOrder = { id: '#ZENVRO-' + Math.floor(Math.random() * 10000), items: [...cart], address: { ...user }, date: new Date().toLocaleDateString(), status: 'Confirmed' };
                            setOrders([newOrder, ...orders]);
                                setCart([]);
                                    alert("Order Placed! Order ID: " + newOrder.id);
                                      };

                                        return (
                                            <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', fontFamily: 'sans-serif' }}>
                                                  {/* 🔝 HEADER & LOGO */}
                                                        <div style={{ backgroundColor: '#131921', padding: '15px', color: '#fff', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
                                                                ZENVRO STORE
                                                                      </div>

                                                                            {/* 🏠 HOME UI (Rich Grid) */}
                                                                                  {activeTab === 'home' && (
                                                                                          <div style={{ padding: '10px' }}>
                                                                                                    <div style={{ backgroundColor: '#febd69', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
                                                                                                                <h2 style={{ margin: 0 }}>Grand Sale! ⚡</h2>
                                                                                                                            <p>Guaranteed 7-day Delivery</p>
                                                                                                                                      </div>
                                                                                                                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                                                                                                                                            {cart.map((item, i) => (
                                                                                                                                                                          <div key={i} style={{ background: '#fff', padding: '10px', borderRadius: '8px' }}>
                                                                                                                                                                                          <img src={item.image} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                                                                                                                                                                                                          <p style={{ fontSize: '12px', fontWeight: 'bold' }}>{item.name}</p>
                                                                                                                                                                                                                          <button style={{ width: '100%', background: '#f0c14b' }}>Add to Cart</button>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                            )}
      {/* 🛒 CART UI */}
            {activeTab === 'cart' && (
                    <div style={{ padding: '15px' }}>
                              <h3>Your Cart</h3>
                                        {cart.length === 0 ? <p>Cart is empty!</p> : cart.map((item, i) => (
                                                    <div key={i} style={{ background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
                                                                  <span>{item.name}</span> <b>₹{item.price}</b>
                                                                              </div>
                                                                                        ))}
                                                                                                  <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
                                                                                                              <p>Deliver to: <b>{user.name}</b></p>
                                                                                                                          <p style={{ fontSize: '12px' }}>{user.area}, {user.city}</p>
                                                                                                                                      <button onClick={() => setShowAddressForm(true)} style={{ width: '100%', padding: '8px', background: '#e2e8f0' }}>Edit Address</button>
                                                                                                                                                </div>
                                                                                                                                                          <button onClick={placeOrder} style={{ width: '100%', padding: '15px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '6px' }}>Place Order</button>
                                                                                                                                                                  </div>
                                                                                                                                                                        )}
      {/* 👤 ACCOUNT & ORDERS */}
            {activeTab === 'account' && (
                    <div style={{ padding: '15px' }}>
                              {!selectedOrder ? (
                                          <div>
                                                        <h3>My Orders</h3>
                                                                      {orders.length === 0 ? <p>No orders yet.</p> : orders.map(o => (
                                                                                      <div key={o.id} onClick={() => setSelectedOrder(o)} style={{ background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '8px', cursor: 'pointer', borderLeft: '4px solid #22c55e' }}>
                                                                                                        <b>{o.id}</b> | {o.status}
                                                                                                                        </div>
                                                                                                                                      ))}
                                                                                                                                                  </div>
                                                                                                                                                            ) : (
                                                                                                                                                                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px' }}>
                                                                                                                                                                                      <button onClick={() => setSelectedOrder(null)}>❮ Back</button>
                                                                                                                                                                                                    <h4>Order: {selectedOrder.id}</h4>
                                                                                                                                                                                                                  <p>📍 Delivery: {selectedOrder.address.area}, {selectedOrder.address.city}</p>
                                                                                                                                                                                                                                <button onClick={() => { setOrders(orders.filter(o => o.id !== selectedOrder.id)); setSelectedOrder(null); }} style={{ width: '100%', background: '#ef4444', color: '#fff', padding: '10px', border: 'none' }}>Cancel Order</button>
                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                    )}

                                                                                                                                                                                                                                                                          {/* 📱 BOTTOM NAV */}
                                                                                                                                                                                                                                                                                <div style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff', borderTop: '1px solid #ddd' }}>
                                                                                                                                                                                                                                                                                        <div onClick={() => setActiveTab('home')}>🏠 Home</div>
                                                                                                                                                                                                                                                                                                <div onClick={() => setActiveTab('cart')}>🛒 Cart</div>
                                                                                                                                                                                                                                                                                                        <div onClick={() => setActiveTab('account')}>👤 Acc</div>
                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              