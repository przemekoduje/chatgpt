import "./dashboardPage.scss";

const DashboardPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if(!text) return;

    await fetch("http://localohost:3000/api/chats", {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({ text }),
    });
  };
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>Focus Boost AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create a new Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analize images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with codet</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
