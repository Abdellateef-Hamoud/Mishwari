import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // بيانات المسئول المحفوظة
  const adminCredentials = {
    username: 'admin',
    password: 'admin123' // يجب تغيير هذا في البيئة الحقيقية
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === adminCredentials.username && password === adminCredentials.password) {
      // تسجيل الدخول ناجح
      navigate('/admin-dashboard'); // توجه إلى لوحة التحكم
    } else {
      setError('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>تسجيل الدخول كمسئول</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>اسم المستخدم:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>كلمة المرور:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  );
};

export default AdminLogin;