import { useDispatch } from "react-redux";
import { login } from "../../api/authApi/authApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handlLogin(e) {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const resultAction = await dispatch(login(user));

    if (login.fulfilled.match(resultAction)) {
      navigate("/");
    } else {
      console.error("Ошибка при регистрации:", resultAction.payload);
    }
  }

  return (
    <div className="mt-20 flex flex-col gap-10 pb-30">
      <div className="flex flex-col text-center text-[20px] font-bold pt-10 ">
        <h1 className="text-[40px]">Log in to Exclusive</h1>
        <h2>Enter your details below</h2>
      </div>

      <div className="flex flex-col items-center gap-5">
        <form
          onSubmit={handlLogin}
          className="flex flex-col gap-4 items-center"
        >
          <input
            className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
            placeholder="Email or phone number"
            type="text"
            name="username"
          />
          <input
            className="w-[320px] h-[56px] rounded border-2 border-[#616161] pl-3 lg:w-[420px]"
            placeholder="Password"
            type="password"
            name="password"
          />
          <button type="submit" className="mt-2 w-[320px] h-[56px] rounded bg-[#DB4444] text-white font-[500] lg:w-[420px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.18),0_4px_8px_rgba(0,0,0,0.22)] transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.22)] hover:brightness-110">
            login
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-5 items-center">
        <button className="w-[320px] h-[56px] rounded bg-[#DB4444] text-white font-[500] lg:w-[420px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.18),0_4px_8px_rgba(0,0,0,0.22)] transition-all duration-300 hover:shadow-[inset_0_2px_4px_rgba(0,0,0,0.18),0_2px_6px_rgba(0,0,0,0.22)] hover:brightness-110">
          Create Account
        </button>
      </div>
    </div>
  );
}
