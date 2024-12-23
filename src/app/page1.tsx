const features = [
    {
      name: 'Minimal and thoughtful',
      description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg',
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg',
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example1() {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              Protect your device
            </h2>
            <p className="mt-4 text-gray-500 text-base sm:text-lg md:text-xl">
              As a digital creative, your laptop or tablet is at the center of your work. Keep your device safe with a
              fabric sleeve that matches in quality and looks.
            </p>
          </div>
      
          <div className="flex flex-col gap-8 md:flex-row">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-1 items-center gap-6"
              >
                {/* Image Section */}
                <div className="flex-shrink-0 w-1/2 max-w-[150px] sm:max-w-[200px] md:max-w-[250px]">
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
      
                {/* Text Section */}
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>     
    )
  }