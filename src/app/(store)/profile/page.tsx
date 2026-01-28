export default function ProfilePage() {
  // Mock data - replace with Supabase auth/data later
  const user = {
    name: "Bozo VIP",
    email: "vip@bozoheadstash.com",
    joined: "January 2026",
  };

  const orders = [
    {
      id: "ORD-7729-X",
      date: "Jan 12, 2026",
      total: "$145.00",
      status: "Delivered",
      items: ["Bozo Logo Tee", "Stash Cap"],
    },
    {
      id: "ORD-9921-Y",
      date: "Dec 28, 2025",
      total: "$85.00",
      status: "Processing",
      items: ["Limited Hoodie"],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <header className="mb-16 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-900">
            Profile
          </span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          Manage your account, view orders, and check your stash.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Sidebar / User Info */}
        <div className="space-y-8">
          <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              Account Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Name
                </label>
                <p className="text-lg text-white font-medium">{user.name}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Email
                </label>
                <p className="text-lg text-white font-medium">{user.email}</p>
              </div>
              <div>
                <label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Member Since
                </label>
                <p className="text-lg text-white font-medium">{user.joined}</p>
              </div>
            </div>
            <button className="mt-8 w-full py-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-bold uppercase text-sm tracking-wider transition-colors rounded-lg">
              Edit Profile
            </button>
            <button className="mt-4 w-full py-3 border border-red-900/30 text-red-500 hover:bg-red-900/10 font-bold uppercase text-sm tracking-wider transition-colors rounded-lg">
              Sign Out
            </button>
          </div>
        </div>

        {/* Main Content / Orders */}
        <div className="md:col-span-2 space-y-8">
          <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
            Order History
          </h2>

          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="group bg-neutral-900/30 hover:bg-neutral-900/50 border border-white/5 hover:border-white/10 p-6 rounded-2xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {order.id}
                    </h3>
                    <p className="text-sm text-neutral-500">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        order.status === "Delivered" ?
                          "bg-green-500/10 text-green-500"
                        : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="text-xl font-bold text-white">
                      {order.total}
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm text-neutral-400">
                    <span className="text-neutral-500">Items: </span>
                    {order.items.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {orders.length === 0 && (
            <div className="text-center py-12 bg-neutral-900/20 rounded-2xl border border-dashed border-white/5">
              <p className="text-neutral-500 text-lg">No orders found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
