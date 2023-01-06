export default function Hello({ user }) {
  return user?.name ? <h1>Hello {user.name}</h1> : <button>로그인</button>;
}
