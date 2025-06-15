import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("من فضلك أدخل اسم المستخدم وكلمة المرور");
      return;
    }

    const success = login(username.trim(), password.trim());
    if (success) {
      window.location.href = "https://dashboard-umber-omega-65.vercel.app/";

    } else {
      setError("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">تسجيل دخول المسؤول</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>اسم المستخدم</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>كلمة المرور</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button type="submit" className="btn btn-success w-100">
          دخول
        </button>
      </form>
    </div>
  );
}
