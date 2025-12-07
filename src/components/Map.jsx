export default function GoogleMap() {
  return (
    <section className="
      w-full
      h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px]
    ">
      <iframe
        title="Coco Hut Devbag"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.448184624377!2d73.4952005!3d15.9773119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0010064906baf:0xbf0547793384bf22!2sCoco%20Hut%2C%20Family%20Beach%20Home!5e0!3m2!1sen!2sin!4v1733123456789"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
