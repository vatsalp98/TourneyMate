import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="prose">
        <h1 className="heading">TourneyMate</h1>
      </div>
      <div>
        <article className="prose">
          TourneyMate is a software that helps you organize and manage your own
          table tennis tournaments. Whether you want to play with your friends,
          family, or colleagues, Table Tennis Tournament can help you create and
          customize your own events, invite and register participants, generate
          brackets and schedules, track scores and standings, and share the
          results online. Table Tennis Tournament is easy to use, flexible, and
          fun. You can choose from different formats, rules, and settings to
          suit your preferences and skill levels. You can also view statistics
          and analytics of your performance and compare with other players.
          Table Tennis Tournament is the ultimate software for table tennis
          enthusiasts who want to challenge themselves and have fun. Download it
          today and start your own table tennis adventure!
        </article>
      </div>
      <div>
        <div className="btn">Create new tournament</div>
      </div>
      <div>
        <div className="btn">View Tournament</div>
      </div>
    </main>
  );
}
