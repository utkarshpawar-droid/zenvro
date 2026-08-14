'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
    const [orders, setOrders] = useState([]); // असली ऑर्डर लिस्ट
      const [selectedOrder, setSelectedOrder] = useState(null); // ऑर्डर डिटेल के लिए
        const [user, setUser] = useState({ name: 'Utkarsh Pawar', mobile: '9876543210', area: 'Bairagarh', city: 'Bhopal', pincode: '462030' });
          const [cart, setCart] = useState([{ id: 101, name: 'Smartwatch', price: 1299, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500' }]);
            
              // ऑर्डर प्लेस करना
                const placeOrder = () => {
                    const newOrder = { 
                          id: '#ZENVRO-' + Math.floor(Math.random() * 10000), 
                                items: [...cart], 
                                      address: { ...user }, 
                                            date: new Date().toLocaleDateString(),
                                                  status: 'Confirmed'
                                                      };
                                                          setOrders([newOrder, ...orders]);
                                                              setCart([]); // Cart खाली करो
                                                                  alert("Order Placed Successfully!");
                                                                    };
  return (
        <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '70px' }}>
              <div style={{ backgroundColor: '#0f172a', padding: '15px', color: '#fff', position: 'sticky', top: 0, zIndex: 40 }}>ZENVRO STORE</div>
                    
                          {activeTab === 'home' && <div style={{ padding: '20px' }}><h3>Shop Best Sellers</h3><p>Featured items...</p></div>}
                                {activeTab === 'categories' && <div style={{ padding: '20px' }}><h3>Categories</h3></div>}
      {activeTab === 'cart' && (
                <div style={{ padding: '15px' }}>
                          <h4>Your Cart</h4>
                                    {cart.length === 0 ? <p>Cart is empty!</p> : cart.map((item, i) => (
                                                <div key={i} style={{ background: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
                                                              {item.name} - ₹{item.price}
                                                                          </div>
                                                                                    ))}
                                                                                              {cart.length > 0 && (
                                                                                                          <button onClick={placeOrder} style={{ width: '100%', padding: '12px', background: '#22c55e', color: '#fff', border: 'none', borderRadius: '6px' }}>Place Order</button>
                                                                                                                    )}
                                                                                                                            </div>
                                                                                                                                  )}
      {/* 👤 ACCOUNT & ORDERS */}
            {activeTab === 'account' && (
                    <div style={{ padding: '15px' }}>
                              {!selectedOrder ? (
                                          <div>
                                                        <h3>My Orders</h3>
                                                                      {orders.length === 0 ? <p>No orders yet.</p> : orders.map(o => (
                                                                                      <div key={o.id} onClick={() => setSelectedOrder(o)} style={{ background: '#fff', padding: '15px', marginBottom: '10px', borderRadius: '8px', cursor: 'pointer', border: '1px solid #ddd' }}>
                                                                                                        <b>{o.id}</b> | {o.status} <br/> <span style={{fontSize: '11px'}}>{o.date}</span>
                                                                                                                        </div>
                                                                                                                                      ))}
                                                                                                                                                  </div>
                                                                                                                                                            ) : (
                                                                                                                                                                        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px' }}>
                                                                                                                                                                                      <button onClick={() => setSelectedOrder(null)} style={{ marginBottom: '10px' }}>❮ Back</button>
                                                                                                                                                                                                    <h4>Order Detail: {selectedOrder.id}</h4>
                                                                                                                                                                                                                  <p><b>Address:</b> {selectedOrder.address.area}, {selectedOrder.address.city}</p>
                                                                                                                                                                                                                                <button onClick={() => { setOrders(orders.filter(o => o.id !== selectedOrder.id)); setSelectedOrder(null); }} style={{ width: '100%', background: '#ef4444', color: '#fff', padding: '10px', borderRadius: '6px', border: 'none' }}>Cancel Order</button>
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                            <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                                                                                                                                                                                                                                                                            <h5>💬 AI Chat for this Order</h5>
                                                                                                                                                                                                                                                                                            <div style={{ height: '100px', background: '#f1f5f9', padding: '10px', fontSize: '12px' }}>AI Bot: "How can I help with {selectedOrder.id}?"</div>
                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                              )}

                                                                                                                                                                                                                                                                                                                                                    {/* 📱 NAV BAR */}
                                                                                                                                                                                                                                                                                                                                                          <div style={{ position: 'fixed', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-around', padding: '15px', background: '#fff' }}>
                                                                                                                                                                                                                                                                                                                                                                  <div onClick={() => setActiveTab('home')}>🏠 Home</div>
                                                                                                                                                                                                                                                                                                                                                                          <div onClick={() => setActiveTab('cart')}>🛒 Cart</div>
                                                                                                                                                                                                                                                                                                                                                                                  <div onClick={() => setActiveTab('account')}>👤 Acc</div>
                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                                                                                              
                              
                                                            