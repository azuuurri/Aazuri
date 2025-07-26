'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Twitter, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function BlockBuddiesLanding() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nftPreviews = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/art${(i % 8) + 1}.png`,
 // cycles through art1.png to art8.png
    alt: `BlockBuddy #${i + 1}`,
  }))
  

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Genesis Drop",
      description: "Launch of 5,000 unique Chibitsu with exclusive traits and styles.",
      status: "upcoming",
    },
    {
      phase: "Phase 2",
      title: "Community Building",
      description: "Fun events, giveaways, and exclusive merch drops for early adopters.",
      status: "upcoming",
    },
    {
      phase: "Phase 3",
      title: "Utility Expansion",
      description: "Holder rewards, governance tools, and access to the Chibitsu pixelverse.",
      status: "future",
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Growth",
      description: "Collaborations, mini-games, and expanding Chibitsu utility across Web3.",
      status: "future",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated NFT Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4 transition-transform duration-1000 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            {[...nftPreviews, ...nftPreviews, ...nftPreviews].map((nft, index) => (

              <div
                key={nft.id}
                className="aspect-square rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                <Image
                  src={nft.src || "/placeholder.svg"}
                  alt={nft.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Chibitsu  
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300 font-light">
          Cute. Rare. Yours forever.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Mint Coming Soon
          </Button>

  
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">About Chibitsu</h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
            Chibitsu is a collection of 5,000 adorable, algorithmically generated pixel characters living on the Ethereum blockchain. Each Chibitsu is a one-of-a-kind digital companion with unique traits, styles, and charm.
            
            </p>
            <p>
            Our mission is to create a cozy and thriving community where holders can collect, trade, and celebrate their favorite chibi friends. Whether you're here for the art, the vibes, or the Web3 journey, Chibitsu is your portal to the cutest corner of the blockchain.
            </p>
            <p>
            More than just NFTs, Chibitsu are lovable collectibles packed with utility, rewards, and community-driven surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Roadmap</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapPhases.map((phase, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-4 h-4 rounded-full mr-3 ${
                        phase.status === "upcoming" ? "bg-yellow-500" : "bg-gray-500"
                      }`}
                    />
                    <span className="text-sm font-semibold text-purple-400 uppercase tracking-wide">{phase.phase}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>

                  <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-12">
          Connect with fellow Chibitsu holders and stay updated on the latest adventures!
          </p>

          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="group flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-semibold">Discord</span>
            </a>

            <a
              href="#"
              className="group flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
            >
              <Twitter className="w-6 h-6" />
              <span className="font-semibold">Twitter</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2024 BlockBuddies. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
