import React from 'react';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
// import { useParams } from "react-router-dom";
import { Edit2, Loader2, Music, Video, ShoppingCart, MessageCircle, Heart, ArrowRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingPageView2 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const username = "vishal12";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchLandingPageData = async () => {
      // const response = await fetchLandingPageByUsername(username);
      const response =
      {
        "artistPage": {
          "artistName": "Vishal Mishra",
          "stageTitles": "5-Star Performer | Chart-Topping Artist | Voice Artist",
          "artistBio": "Hello, my name is Vishal Mishra, a passionate musician creating soulful melodies.",
          "artistPhoto": "https://c.saavncdn.com/artists/Vishal_Mishra_004_20230804115745_500x500.jpg",
          "gradientStart": "#0bf9b2",
          "gradientEnd": "#f1ce09"
        },
        "performances": [
          {
            "performanceId": "perf1",
            "eventTitle": "Live at Mumbai Arena",
            "description": "An acoustic performance for music lovers.",
            "ticketPrice": 1499,
            "durationMinutes": 120,
            "platform": "Stage",
            "performanceType": "Team"
          },
          {
            "performanceId": "perf2",
            "eventTitle": "Melody Night",
            "description": "A night of soulful tunes.",
            "ticketPrice": 699,
            "durationMinutes": 30,
            "platform": "Party",
            "performanceType": "Solo"
          },
          {
            "performanceId": "perf3",
            "eventTitle": "Symphony Session",
            "description": "A virtual symphony session with fans.",
            "ticketPrice": 499,
            "durationMinutes": 45,
            "platform": "Theater",
            "performanceType": "Solo"
          }
        ],
        "merchandise": [
          {
            "merchId": "merc1",
            "merchName": "Signed TShirt + Signed Cup + Signed Vinyl",
            "merchDescription": "Limited edition signed merchandise.",
            "price": 399,
            "merchType": "Exclusive",
            "imageURL": "https://img.freepik.com/premium-psd/assortment-merchandising-items_23-2150799377.jpg?semt=ais_hybrid"
          }
        ],
        "songSales": [
          {
            "songId": "song1",
            "title": "Melody of Dreams",
            "priceType": "Variable",
            "description": "An enchanting melody inspired by the beauty of nature.",
            "imageURL": "https://images.t2online.in/cdn-cgi/image/width=1280,quality=70/https://apis.t2online.in/image/journal/article.jpg?img_id=1204123&t=1730672058584"
          },
          {
            "songId": "song2",
            "title": "Echoes of the Heart",
            "priceType": "Set",
            "price": 100,
            "description": "A heartfelt ballad that resonates deeply with listeners.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/5.jpg"
          },
          {
            "songId": "song3",
            "title": "Rhythm of the Night",
            "priceType": "Set",
            "price": 200,
            "description": "A vibrant and energetic track perfect for dancing.",
            "imageURL": "https://vishal-mishra.com/wp-content/uploads/2024/05/1.jpg"
          },
          {
            "songId": "song4",
            "title": "Journey Within",
            "priceType": "Set",
            "price": 50,
            "description": "A soulful piece reflecting the artist's inner journey.",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          }
        ],
        "musicVideos": [
          {
            "videoId": "vid1",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://www.theindianwire.com/wp-content/uploads/2024/12/VISHAL-MISHRA.jpg"
          },
          {
            "videoId": "vid2",
            "title": "Melodic Memories",
            "description": "A visual treat of my recent performance.",
            "platform": "YouTube",
            "redirectURL": "https://www.youtube.com/watch?v=CfWtfgwL8Z8",
            "imageURL": "https://clikrecords.com/wp-content/uploads/2022/09/Vishal-Mishra-2.jpg"
          },
        ],
        "fanMessages": {
          "title": "Message Vishal Mishra",
          "description": "Send me your thoughts or questions.",
          "promisedReplyTime": "3"
        },
        "supportPage": {
          "title": "Show Your Love"
        },
        "musicPlatformLinks": [
          {
            "musicPlatform": "JioSaavan",
            "url": "https://www.jiosaavn.com/artist/vishal-mishra-songs/f0sXoS0mUnE_",
            "icon": "https://images.sftcdn.net/images/t_app-icon-m/p/4b3bebe9-f429-42cc-89db-2a9493062a5e/2230401414/jiosaavn-logo"
          },
          {
            "musicPlatform": "Spotify",
            "url": "https://open.spotify.com/artist/5wJ1H6ud777odtZl5gG507",
            "icon": "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
          }
        ]
      }

      setLandingPageData(response);
      setProfileImage(response.artistPage.artistPhoto);
    };
    fetchLandingPageData();
  }, [username]);


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.offsetHeight;

    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    } else {
      console.log(`Section with ID ${id} not found`);
    }
  };

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const buttonHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  if (!landingPageData) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">Landing page not found</div>
        </CardContent>
      </Card>
    );
  }

  const { artistPage, performances, merchandise, songSales, musicVideos, fanMessages, supportPage, musicPlatformLinks } = landingPageData;



  return (
    <motion.div
      className="min-h-screen flex flex-col items-center pt-24 px-4 md:px-8 relative"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Add animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-black/0 to-pink-900/30 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-soft-light" />
      </div>

      <style jsx>{`
        .sticky-navbar {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        @keyframes gradient {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.5) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }

        .animate-gradient {
          animation: gradient 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>

      {/* Navbar Section */}
      <motion.nav
        id="navbar"
        className="fixed top-0 left-0 right-0 w-full z-50 sticky-navbar"
        variants={fadeInUp}
      >
        <Card className="rounded-none border-none bg-black/50 backdrop-blur-lg shadow-lg">
          <CardContent className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            <div className="flex justify-between items-center">
              <h2 className="font-extrabold text-lg md:text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                @{username}
              </h2>
              <Tabs>
                <TabsList className="hidden md:flex space-x-4">
                  <TabsTrigger
                    value="performances"
                    onClick={() => scrollToSection('performances')}
                  >
                    <Music className="w-4 h-4 mr-1" /> Performances
                  </TabsTrigger>
                  <TabsTrigger
                    value="videos"
                    onClick={() => scrollToSection('videos')}
                  >
                    <Video className="w-4 h-4 mr-1" /> Videos
                  </TabsTrigger>
                  <TabsTrigger
                    value="songsSale"
                    onClick={() => scrollToSection('songsSale')}
                  >
                    <Music className="w-4 h-4 mr-1" /> Songs Sale
                  </TabsTrigger>
                  <TabsTrigger
                    value="merchandise"
                    onClick={() => scrollToSection('merchandise')}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" /> Merchandise
                  </TabsTrigger>
                  <TabsTrigger
                    value="fanMessages"
                    onClick={() => scrollToSection('messages')}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" /> Messages
                  </TabsTrigger>
                  <TabsTrigger
                    value="support"
                    onClick={() => scrollToSection('support')}
                  >
                    <Heart className="w-4 h-4 mr-1" /> Support
                  </TabsTrigger>
                </TabsList>
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    className="md:hidden text-white hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </Button>

                  {isMobileMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 ring-1 ring-white/10"
                    >
                      <div className="py-1">
                        {[
                          { id: 'performances', icon: <Music className="w-4 h-4" />, label: 'Performances' },
                          { id: 'videos', icon: <Video className="w-4 h-4" />, label: 'Videos' },
                          { id: 'songsSale', icon: <Music className="w-4 h-4" />, label: 'Songs Sale' },
                          { id: 'merchandise', icon: <ShoppingCart className="w-4 h-4" />, label: 'Merchandise' },
                          { id: 'messages', icon: <MessageCircle className="w-4 h-4" />, label: 'Messages' },
                          { id: 'support', icon: <Heart className="w-4 h-4" />, label: 'Support' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            className="w-full px-4 py-2 text-sm text-white hover:bg-white/10 flex items-center"
                            onClick={() => {
                              scrollToSection(item.id);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {item.icon}
                            <span className="ml-2">{item.label}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </motion.nav>

      {/* Main Content Container */}
      <div className="w-full max-w-4xl space-y-12 pb-16">
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          variants={fadeInUp}
        >
          <Avatar className="w-48 h-48 mb-4 ring-4 ring-purple-500/20">
            <AvatarImage src={profileImage || "/default-avatar.jpg"} alt="Profile" />
            <AvatarFallback className="text-2xl font-black">{username}</AvatarFallback>
          </Avatar>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-center 
                     bg-gradient-to-r from-white via-purple-300 to-pink-300 
                     bg-clip-text text-transparent">
            {artistPage.artistName}
          </h1>
          <div className="text-xl md:text-2xl font-medium text-center tracking-wide 
                      text-gray-300 max-w-2xl">
            {artistPage.stageTitles}
          </div>

          {/* Social Links Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-2xl">
            {musicPlatformLinks.map((link) => (
              <motion.button
                key={link.musicPlatform + link.url}
                className="flex items-center p-4 border border-white/10 rounded-full 
                         bg-gradient-to-r from-black/20 to-purple-900/20 backdrop-blur-sm 
                         hover:from-purple-900/30 hover:to-black/30
                         transition-all duration-300"
                onClick={() => link.url && window.open(link.url, '_blank')}
                whileHover="hover"
                variants={buttonHover}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full mr-3">
                  <img
                    src={link.icon}
                    alt={`${link.musicPlatform} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-sm font-semibold tracking-wide">{link.musicPlatform}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div variants={fadeInUp} className="w-full">
          <Card className="bg-black/30 backdrop-blur-lg border-none text-white p-8">
            <CardHeader className="space-y-6">
              <CardTitle className="text-3xl font-black tracking-tight text-transparent 
                                bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                About
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed text-gray-300 font-medium">
                {artistPage.artistBio}
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Music Videos Section */}
        <motion.div id="videos" variants={fadeInUp}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-bold"><Video className="w-5 h-5 mr-2" /> Music Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {musicVideos.map((video) => (
                  <motion.div
                    key={video.videoId}
                    className="overflow-hidden cursor-pointer w-full"
                    onClick={() => window.open(video.redirectURL, '_blank')}
                    whileHover="hover"
                    variants={buttonHover}
                  >
                    <div className="relative">
                      <div className="w-full" style={{ paddingTop: '66.66%' }}>
                        <img
                          src={video.imageURL}
                          alt={video.title}
                          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 bg-white/90 backdrop-blur-sm flex justify-between items-center">
                        <span className="font-medium">{video.title}</span>
                        <Button variant="ghost" size="icon">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performances Section */}
        <motion.div id="performances" className="mt-8" variants={fadeInUp}>
          <div className="p-6 bg-black/30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-black tracking-tight text-center text-transparent 
                 bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-6">
              <Music className="w-6 h-6 inline-block mr-2" /> 
              Performances
            </h2>

            {performances.map((perf) => (
              <motion.div 
                key={perf.performanceId} 
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="mb-4 bg-white/10 hover:bg-white/15 transition-all duration-300 
                              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-wide text-white">
                      {perf.eventTitle}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-white/80 leading-relaxed">
                      {perf.description}
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center text-white/90">
                          <span className="font-semibold">Duration:</span>
                          <span className="ml-2">{perf.durationMinutes} mins</span>
                        </div>
                        <div className="flex items-center text-white/90">
                          <span className="font-semibold">Location:</span>
                          <span className="ml-2">{perf.platform}</span>
                        </div>
                        <div className="flex items-center text-white/90">
                          <span className="font-semibold">Price:</span>
                          <span className="ml-2">${perf.ticketPrice}</span>
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.button
                      className="flex items-center justify-center bg-gradient-to-r 
                               from-purple-500 to-pink-500 hover:from-purple-600 
                               hover:to-pink-600 text-white font-bold tracking-wide
                               border-none transition-all duration-300 px-6 py-3 rounded-full
                               shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Book Now <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Songs sales Section */}
        <motion.div id="songsSale" variants={fadeInUp}>
          <div className="p-6 bg-black/30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-black tracking-tight text-center text-transparent 
                     bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-6">
              <Music className="w-6 h-6 inline-block mr-2" /> 
              Songs for Sale
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {songSales.map((song) => (
                <motion.div
                  key={song.songId}
                  className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden flex flex-col"
                  whileHover="hover"
                  variants={buttonHover}
                >
                  {/* Image Section */}
                  <div className="h-48">
                    <img
                      src={song.imageURL}
                      alt={song.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{song.title}</h3>
                      <p className="text-sm text-white/80">
                        {song.description}
                        <br />
                        <span className="text-white/90">
                          Pricing: {song.priceType}
                          {song.price && ` - $${song.price}`}
                        </span>
                      </p>
                    </div>
                    <motion.button
                      className="flex items-center justify-center bg-gradient-to-r 
                                 from-purple-500 to-pink-500 hover:from-purple-600 
                                 hover:to-pink-600 text-white font-bold tracking-wide
                                 border-none transition-all duration-300 mt-4 w-full px-4 py-2 rounded-full"
                      whileHover="hover"
                      variants={buttonHover}
                    >
                      View Songs <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Merchandise Section */}
        <motion.div id="merchandise" variants={fadeInUp}>
          <div className="p-6 bg-black/30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-black tracking-tight text-center text-transparent 
                     bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-6">
              <ShoppingCart className="w-6 h-6 inline-block mr-2" /> 
              Merchandise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {merchandise.map((merc) => (
                <motion.div
                  key={merc.merchId}
                  className="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden flex flex-col"
                  whileHover="hover"
                  variants={buttonHover}
                >
                  {/* Image Section */}
                  <div className="h-48">
                    <img
                      src={merc.imageURL}
                      alt={merc.merchName}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{merc.merchName}</h3>
                      <p className="text-sm text-white/80">
                        {merc.merchDescription}
                        <br />
                        <span className="text-white/90">Price: ${merc.price}</span>
                        <br />
                        <span className="text-white/90">Type: {merc.merchType}</span>
                      </p>
                    </div>
                    <motion.button
                      className="flex items-center justify-center bg-gradient-to-r 
                                 from-purple-500 to-pink-500 hover:from-purple-600 
                                 hover:to-pink-600 text-white font-bold tracking-wide
                                 border-none transition-all duration-300 mt-4 w-full px-4 py-2 rounded-full"
                      whileHover="hover"
                      variants={buttonHover}
                    >
                      View Bundle <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Messages Section */}
        <motion.div id="messages" variants={fadeInUp}>
          {fanMessages && (
            <div className="p-6 bg-black/30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-black tracking-tight text-center text-transparent 
                     bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-6">
                <MessageCircle className="w-6 h-6 inline-block mr-2" /> 
                Fan Messages
              </h2>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="mb-4 bg-white/10 hover:bg-white/15 transition-all duration-300 
                              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-wide text-white">
                      Message Me
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-white/80 leading-relaxed">
                      <div className="space-y-2">
                        <p>{fanMessages.title}</p>
                        <p>{fanMessages.description}</p>
                        <p className="flex items-center">
                          <span className="font-semibold">Promised Reply Time:</span>
                          <span className="ml-2">{fanMessages.promisedReplyTime} hours</span>
                        </p>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.button
                      className="flex items-center justify-center bg-gradient-to-r 
                               from-purple-500 to-pink-500 hover:from-purple-600 
                               hover:to-pink-600 text-white font-bold tracking-wide
                               border-none transition-all duration-300 px-6 py-3 rounded-full
                               shadow-lg hover:shadow-xl w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Support Section */}
        <motion.div id="support" variants={fadeInUp}>
          {supportPage && (
            <div className="p-6 bg-black/30 backdrop-blur-lg rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-black tracking-tight text-center text-transparent 
                     bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-6">
                <Heart className="w-6 h-6 inline-block mr-2" /> 
                Support Me
              </h2>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="mb-4 bg-white/10 hover:bg-white/15 transition-all duration-300 
                              shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-wide text-white">
                      Support
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-white/80 leading-relaxed">
                      <p>{supportPage.title}</p>
                      <p className="mt-2 text-white/90">
                        Your support helps me create more amazing content for you!
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.button
                      className="flex items-center justify-center bg-gradient-to-r 
                               from-purple-500 to-pink-500 hover:from-purple-600 
                               hover:to-pink-600 text-white font-bold tracking-wide
                               border-none transition-all duration-300 px-6 py-3 rounded-full
                               shadow-lg hover:shadow-xl w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Support <Heart className="w-4 h-4 ml-2" />
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPageView2;
