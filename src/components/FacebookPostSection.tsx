const FacebookPostSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in-up">
            Dernières Actualités
          </h2>
          
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full max-w-[500px] mx-auto">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02yx1nvMZK8nTptmW79JBJ9KhDjesmj657Po1E2Hss7monMH86dqEvFGV5ZNXL4a6il%26id%3D61555937974681&show_text=true&width=500" 
                width="100%" 
                height="350" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px]"
              />
            </div>
            
            <div className="w-full max-w-[500px] mx-auto">
              <iframe 
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid052SsuC82t6DYTn1hY61q8NnP7GM46ZbZXb5WbPBiuNPcWCmqTP1269zopAySjnB7l%26id%3D61555937974681&show_text=false&width=500" 
                width="500" 
                height="498" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full h-[600px] sm:h-[650px] md:h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookPostSection;
