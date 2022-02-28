const app = Vue.createApp({
  data() {
    return {
      answerShown: false,
      output: "Answer",
      data2: [
        {
          prompt: "This is the smallest type of network.",
          answer: "What is a Personal Area Network (PAN)?",
          hints:
            "Examples include Bluetooth phone to Car, USB Harddrive to Computer, Firewire videocam to PC",
          cat: "topology",
        },
        {
          prompt:
            "These networks are characterized by short-distance segments within a limited, local area.",
          answer: "What is a Local Area Network (LAN)?",
          hints:
            "Each segment limited to short distances, e.g. 100 meters with Cat 5 Ethernet cabling. Usually consists of wired Ethernet cabling (IEEE 802.3) and/or wireless (IEEE 802.11x) wireless",
          cat: "topology",
        },
        {
          prompt:
            "These networks connect building-centric LANs across a campus, industrial park, or business park.",
          answer: "What is a Campus Area Network (CAN)?",
          hints:
            "Found in college campuses, business parks, military bases, etc.",
          cat: "topology",
        },
        {
          prompt:
            "These networks connect scattered locations throughout a city.",
          answer: "What is a Metropolitan Area Network (MAN)?",
          hints:
            "Larger than a CAN, but smaller than a WAN. Examples include police departments in a district, colleges with community colleges across a city, health centers with satellite clinics in other areas, etc.",
          cat: "topology",
        },
        {
          prompt:
            "These networks connect geographically disparate internal networks, covering distances across the country or around the world.",
          answer: "What is a Wide Area Network (WAN)?",
          hints:
            "Consists of leased lines or virtual private tunnels connected through the Internet. Examples include the Internet, corporate VPN networks spanning national regions (e.g. Seattle to NYC), government offices connected across the nation, etc.",
          cat: "topology",
        },
        {
          prompt:
            "A topology using a single main cable running through an area with vampire/tap cables connecting clients to this main cable.",
          answer: "What is a Bus Topology?",
          hints:
            "Older technology not commonly used anymore. The chief drawback to this is that clients cannot 'talk' all at once, because a single cable is shared among all other clients in this topology and therefore simultaneous communication across this single cable would result in a collision. Thus only one computer can send messages at a single time.",
          cat: "topology",
        },
        {
          prompt:
            "A topology connecting clients on a single cable running in a circular loop.",
          answer: "What is a Ring Topology?",
          hints:
            "Each device is connected to the same cable, but the data travels in a singular direction. This has the same drawback as a Bus Topology: each computer must take turns communicating to other computers.",
          cat: "topology",
        },
        {
          prompt:
            "A topology connecting clients to a single point, e.g. a switch or Wireless Access Point.",
          answer: "What is a Star Topology?",
          hints:
            "The predominant form of network topology in modern networks. Most common media: Ethernet. But wireless and fiber are also options. The chief drawback to this is the single point of failure; if the central point (e.g. switch) fails, then the entire network fails.",
          cat: "topology",
        },
        {
          prompt:
            "A topology connecting WAN links to a single location, e.g. office building.",
          answer: "What is a Hub-and-Spoke Topology?",
          hints:
            "Used for connecting multiple sites to a central site. Drawback to this is the same with Star Topologies: Single point of failure can cause the entire network to fail.",
          cat: "topology",
        },
        {
          prompt:
            "A topology connecting every client directly to every other client.",
          answer: "What is a Mesh Topology?",
          hints:
            "The most redundant topology; no central point of failure. The drawback to this is that it can be very expensive to maintain and operate.",
          cat: "topology",
        },
        {
          prompt:
            "A topology connecting some sites directly, while using a centralized site to connect other sites together.",
          answer: "What is a Partial Mesh Topology?",
          hints:
            "This is a hybrid of a Mesh Topology and Hub-and-Spoke Topology. An example use-case is to connect high-traffic routes directly, while connecting low-traffic routes indirectly through a hub.",
          cat: "topology",
        },
        {
          prompt:
            "This type of wireless topology is the most common and connects clients to a central Wireless Access Point.",
          answer: "What is Infrastructure Mode?",
          hints:
            "This requires (but also benefits from) centralized management and supports wireless security controls.",
          cat: "topology",
        },
        {
          prompt:
            "This type of wireless topology requires no Wireless Access Points or routers and connects clients clients peer-to-peer only.",
          answer: "What is Ad Hoc Mode?",
          hints:
            "Communication between peers is forwarded dynamically. Allows creation/joining networks on-the-fly.",
          cat: "topology",
        },
        {
          prompt:
            "A wireless topology connecting clients through a variety of types network nodes or devices, utilizing different radio frequencies to extend access.",
          answer: "What is a Wireless Mesh Topology?",
          hints:
            "This is often seen in disaster-relief situations where humanitarian aid workers are communicating with the rest of the world through different devices, e.g. cellular from one person to WiFi from another person, to satellite from another  person, and so on. Think of this an improvised, MacGyver'ed method of expanding wireless communication between parties across an area where traditional networks may have failed.",
          cat: "topology",
        },
        {
          prompt:
            "This refers to the network of ordinary, every-day objects (e.g. refrigerators, keys, vehicle components, watches, etc.) that are connected to each other or to the Internet.",
          answer: "What is the Internet of Things (IoT)?",
          hints:
            "This is often seen in disaster-relief situations where humanitarian aid workers are communicating with the rest of the world through different devices, e.g. cellular from one person to WiFi from another person, to satellite from another  person, and so on. Think of this an improvised, MacGyver'ed method of expanding wireless communication between parties across an area where traditional networks may have failed.",
          cat: "IoT",
        },
        {
          prompt:
            "IoT Technology that allows devices to connect wirelessly over the IEEE 802.11 standard in infrastructure or ad-hoc mode.",
          answer: "What is Wi-Fi?",
          hints: "",
          cat: "IoT",
        },
        {
          prompt:
            "IoT technology that utilizes low-energy IEEE 802.15 standards to create a mesh network.",
          answer: "What is Bluetooth?",
          hints: "",
          cat: "IoT",
        },
        {
          prompt:
            "IoT technology that uses electromagnetic fields to read data stored in embedded tags.",
          answer: "What is Radio Frequency Identification (RFID)?",
          hints: "",
          cat: "IoT",
        },
        {
          prompt:
            "IoT technology that enables devices within 4 cm of each other to exchange data.",
          answer: "What is Near Field Communication (NFC)?",
          hints:
            "Used in smartphones for, e.g. Google Pay, Apple Pay, etc. Also used in printers to receive data from phones.",
          cat: "IoT",
        },
        {
          prompt:
            "IoT technology that uses media in the form of light emitted in the infrared spectrum.",
          answer: "What is Infrared (IR)?",
          hints:
            "Commonly seen in car beepers, remote controls, etc. Requires a line of sight.",
          cat: "IoT",
        },
        {
          prompt:
            "IoT technology that uses a short-range, low-latency radio waves that consumes less power than WiFi",
          answer: "What are Z-Waves?",
          hints: "Commonly used for home automation devices.",
          cat: "IoT",
        },
        {
          prompt:
            "IoT technology that specializes in transmitting sensor data, e.g. light.",
          answer: "What is Ant+?",
          hints:
            "Similar to Z-Wave in that this is often used for home automation, e.g. remote controls, TVs, lights, etc. but also found in automobile uses, e.g. tire pressure",
          cat: "IoT",
        },
        {
          prompt:
            "Originally a system of protocols that attempted to universalize the standards of protocols during the 80's, when networking protocols suffered from being too vendor-centric. While this system stands today as a reference tool, this system was not adopted as another competing framework became the dominant standard for networking protocols.",
          answer: "What is the Open Systems Interconnection (OSI) Model?",
          hints:
            "The purpose of this model is to categorize functions of the network into layers, in this case, seven layers. As a reference model, it enables network professionals to effectively analyze and communicate with each other on networking problems.",
          image: "../../images/OSIModel.png",
          cat: "OSI",
        },
        {
          prompt:
            "A mnemonic for remembering the seven layers of the OSI model, from top to bottom.",
          answer: "What is 'All People Seem To Need Data Processing'?",
          cat: "OSI",
        },
        {
          prompt:
            "A mnemonic for remembering the seven layers of the OSI model, from bottom to top.",
          answer: "What is 'Please Do Not Throw Sausage Pizza Away'?",
          cat: "OSI",
        },
        {
          prompt:
            "In this layer of the OSI Model, data is sent as segments and datagrams using either Transmission Control Protocol (TCP) or User Datagram Protocol (UDP).",
          answer: "What is the Transport Layer?",
          hints: "The fourth layer of the OSI Model.",
          cat: "OSI",
        },
        {
          prompt:
            "In this layer of the OSI Model, bits are packaged and transmitted as frames through the network.",
          answer: "What is the Data Link Layer?",
          hints:
            "The second layer of the OSI Model. This is where error detection/correction occurs, as well as identification of network devices with a MAC address.",
          cat: "OSI",
        },
        {
          prompt:
            "The layer where Packets are created and forwarded between routers.",
          answer: "What is the Network Layer?",
          hints:
            "Traffic forwarding, logical addressing (IPv4, IPv6), and routing are services that occur at this layer. ",
          cat: "OSI",
        },
        {
          prompt:
            "The OSI layer where binary digits (Bits) of data are transmitted.",
          answer: "What is the Physical Layer?",
          hints:
            "This layer defines the physical and electrical characteristics, e.g. copper, fiber, radio for choice of medium; wiring standards for connectors and jacks, etc.",
          cat: "OSI",
        },
        {
          prompt:
            "The OSI layer where data formatting and data encryption occurs.",
          answer: "What is the Presentation Layer?",
          hints:
            "An example of data format is ASCII. ASCII converts binary data into text-based data. GIF, JPG, etc.",
          cat: "OSI",
        },
        {
          prompt:
            "The OSI layer where data and communication is authenticated against credentials and thereby assigned to the credentialed user or set of credentialed participants.",
          answer: "What is the Session Layer?",
          hints: "",
          cat: "OSI",
        },
        {
          prompt:
            "The OSI layer where services, such as file transfer, remote access, etc. provide an interface between software running on a computer and the network itself.",
          answer: "What is the Application Layer?",
          hints: "",
          cat: "OSI",
        },
        {
          prompt:
            "Cables Types, Radio Frequencies, and Infrastructure Devices like hubs, WAPs, and media converters are key ingredients of this OSI layer.",
          answer: "What is the Physical Layer?",
          hints: "",
          cat: "OSI",
        },
        {
          prompt:
            "NICS, Bridges, and Switches are components of this OSI layer.",
          answer: "What is the Data Link Layer?",
          hints:
            "These kinds of devices learn which devices are on the network, what their MAC address is, what port they are connected to, etc.",
          cat: "OSI",
        },
        {
          prompt:
            "TCP, UDP, WAN Accelerators, Load Balancers, and Firewalls work in this OSI layer.",
          answer: "What is the Transport Layer?",
          hints: "",
          cat: "OSI",
        },
        {
          prompt:
            "HTML, XML, PHP, JavaScript, ASCII, EBCDIC, UNICODE, GIF, JPG, TIF, SVG, PNG, MPG, MOV, TLS, SSL, operate at this OSI layer.",
          answer: "What the Presentation Layer?",
          hints: "",
          cat: "OSI",
        },
        {
          prompt: "H.323 and NetBIOS operate at this OSI layer.",
          answer: "What is the Session Layer?",
          hints:
            "H.323 is a multimedia-based service that works in VoIP, Internet Telephony, IP-based videoconferencing (e.g. Polycom), etc., that is used to setup, maintain, and tear down a voice/video connection. NetBIOS is used by computers to share files over the network.",
          cat: "OSI",
        },
        {
          prompt:
            "E-mail protocols (POP3, IMAP, SMTP), web browsing protocols (HTTP, HTTPS), DNS, FTP, FTPS, Telnet, SSH, SNMP are found at this OSI layer.",
          answer: "What is the Application Layer?",
          hints: "",
          cat: "OSI",
        },
        {
          prompt:
            "OSI terminology uses this term that generically refers to any segment, packet, or frame.",
          answer: "What is a Protocol Data Unit (PDU)?",
          hints:
            "This term can be combined with the relevant layer for added specificity, e.g. Layer 3 PDU that translates into the TCP/IP equivalent of Packet.",
          cat: "OSI",
        },
        {
          prompt:
            "A method used in the Transport Layer to keep track of where to send and receive requested communications, e.g. which application to send a requested segment of data on a requesting host.",
          answer: "What is Multiplexing?",
          hints:
            "Multiplexing works on the concept of a 'socket'. A socket has a three-pronged definition: 1) An IP Address, 2) a transport protocol, and 3) a port number. When a host sends out a request to a server, a socket is created at this layer four; the source IP address, the choice of transport protocol (TCP or UDP), and a source port number (from the client side, usually any random number between 1025 and 65535. Likewise, when the server receives the request, a socket is created, thus forming a point-to-point socket connection. On the server side, the port number will be a well-known port number (from 0 to 1024).",
          image: "",
          cat: "OSI",
        },
        {
          prompt:
            "TCP implements flow control by using this field, which the receiver uses to tell the sender how much data it can receive right now.",
          answer: "What is the window?",
          hints:
            "This is a number of bytes that can be slided up or down, depending on the load conditions of the receiving host. For example, a server can set a window of 3000 bytes, which the client refers to as its limit of the next transmission before awaiting acknowledgment from the server. Then upon receipt of 3000 bytes, the server can grant a new window for the next transmission. This new window may be exactly the same, or higher, or lower.",
          image: "tcpwindow",
          cat: "OSI",
        },
        {
          prompt:
            "TCP headers use these two fields to maintain error recovery and reliability.",
          answer: "What are Sequence and Acknowledgement Fields?",
          hints:
            "A series of segments are transmitted, each with numbered with incrementally increasing serial numbers. At the end of the transmission, the receiver transmits an acknowledgement that sends a number that sums up the sequence numbers and adds a unit of increment. This 'sum + unit of increment' is translated as, 'I've received all of your sequence numbers, and am ready to receive your nth transmission' where n is the sum + unit of increment. This convention is called forward acknowledgment.",
          image: "sequenceacknowledgement",
          cat: "OSI",
        },
        {
          prompt:
            "This model is simplified alternative to the OSI model, and is more relevant in the sense that virtually all modern networks are based on it.",
          answer: "What is the TCP/IP Model?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "The top three layers of the OSI model are consolidated into this top layer of the TCP/IP model.",
          answer: "What is the Application Layer?",
          hints:
            "The top seven layers of the OSI model are: 7) Application, 6) Presentation, and 5) Session.",
          cat: "TCP",
        },
        {
          prompt:
            "These two layers of the TCP IP model are also found in the OSI Model.",
          answer:
            "What are the Transport and Internet (called Network in the OSI Model) Layers?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "The bottom two layers of the OSI model are consolidated into this bottom layer of the TCP/IP model.",
          answer: "What is the Network Interface Layer?",
          hints:
            "Consolidates the following layers of the OSI model: 2) Data Link and 1) Physical.",
          cat: "TCP",
        },
        {
          prompt:
            "This refers to the communication from one layer to the layer directly above or beneath it.",
          answer: "What is Adjacent-Layer Interaction?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "This refers to communication that takes place between protocols that are on the same layer as each other.",
          answer: "What is Same-Layer Interaction?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "This is the final port number that exists in the TCP/IP framework.",
          answer: "What is port number 65,536?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "In the TCP/IP framework, all ports within this range are reserved for special purposes.",
          answer: "What are ports 0 to 1024?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "The TCP/IP framework assigns this predefined range of ports for all ad-hoc, ephemeral transport use.",
          answer: "What are ports 1025 to 65,536?",
          hints: "",
          cat: "TCP",
        },
        {
          prompt:
            "Data transfer between client and server requires this pair of source data and this pair of destination data.",
          answer:
            "What is 1) the Source IP and Port, and 2) the Destination IP and Port?",
          hints: "",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol provides bidirectional interactive text-oriented communication using a virtual terminal connection.",
          answer: "What is Telnet?",
          hints:
            "This protocol operates on port 23. Essentially, this is remote access via command prompt.",
          cat: "P&P",
        },
        {
          prompt: "This is the protocol for sending e-mail.",
          answer: "What is Simple Mail Transfer Protocol (SMTP)?",
          hints: "This protocol operates on port 25.",
          cat: "P&P",
        },
        {
          prompt: "This protocol converts domain names into IP addresses.",
          answer: "What is the Domain Name Service (DNS)?",
          hints: "This protocol operates on port 53.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol enables computers to request IP addresses and networking parameters automatically.",
          answer: "What is the Dynamic Host Configuration Protocol (DHCP)?",
          hints: "This protocol operates on ports 67 and 68.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol transmits files in both directions of a client-server application, often used for booting an operation system off the network.",
          answer: "What is the Trivial File Transfer Protocol (TFTP)?",
          hints:
            "Also used for sending/receiving configuration files for routers and switches. This protocol operates on port 69.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol serves as the foundation for communication for the World Wide Web (WWW).",
          answer: "What is the Hyper Text Transfer Protocol (HTTP)?",
          hints: "This protocol operates on port 80 and offers no security.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol enables local e-mail clients to retrieve and download e-mail from a remote server over a TCP/IP connection.",
          answer: "What is the Post Office Protocol v3 (POP3)?",
          hints: "This protocol operates on port 110.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol provides clock synchronization between computer systems over packet-switched, variable-latency data networks.",
          answer: "What is the Network Time Protocol (NTP)?",
          hints: "This protocol operates on port 123.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol enables separate PCs to share files and printers with other PCs on a local network.",
          answer: "What is the Network Basic Input/Output System (NetBIOS)?",
          hints: "This protocol operates on port 139.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol provides e-mail clients to retrieve e-mail messages from a mail server over a TCP/IP connection, allowing users to view and manipulate messages as if they're stored locally.",
          answer: "What is the Internet Mail Application protocol (IMAP)?",
          hints: "This protocol operates on port 143.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol provides collection and organization of information about managed devices on IP networks.",
          answer: "What is the Simple Network Management protocol (SNMP)?",
          hints: "This protocol operates on port 161.",
          cat: "P&P",
        },
        {
          prompt:
            "This is an industry standard protocol for accessing and maintaining directory information services.",
          answer: "What is the Lightweight Directory Access Protocol (LDAP)?",
          hints: "This protocol operates on port 389.",
          cat: "P&P",
        },
        {
          prompt: "This protocol is used for secure, encrypted web browsing.",
          answer: "What is HTTP Secure protocol (HTTPS)?",
          hints:
            "This protocol operates on port 443 and uses Transport Layer Security (TLS) or Secure Sockets Layer (SSL) for encryption.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol provides shared access to files, printers, and miscellaneous communications between devices on a network.",
          answer: "What is Service Message Block (SMB)?",
          hints:
            "This protocol operates on port 445 and often works in conjunction with NetBIOS at port 139. NetBIOS handles the authentication, and SMB manages the data transfers.",
          cat: "P&P",
        },
        {
          prompt:
            "This secured protocol is used for accessing and maintaining directory information services.",
          answer: "WHat is LDAP Secure (LDAPS)?",
          hints: "This protocol operates on port 636.",
          cat: "P&P",
        },
        {
          prompt:
            "This Microsoft-proprietary protocol provides a GUI-based remote connection to another computer over a network connection, requiring RDP client/server software.",
          answer: "What is the Remote Desktop Protocol (RDP)?",
          hints: "This protocol operates on TCP or UDP port 3389.",
          cat: "P&P",
        },
        {
          prompt:
            "This protocol provides signaling and controlling services for multimedia sessions in applications, commonly used for teleconferences, video calls, VOIP, instant messaging, etc.",
          answer: "What is Session Initition Protocol?",
          hints: "This protocol operates on ports 5060 and 5061.",
          cat: "P&P",
        },
        {
          prompt:
            "This type of media contains an insulated copper core, insulated by a dielectric shell, further insulated by a braided metal shield, wrapped in a plastic jacket.",
          answer: "What is a Coaxial Cable?",
          hints:
            "Two common varieties of this cable are 1) RG-6, industrial-grade and very thick; commonly used by cable companies to connect individual homes. 2) RG-59, typically used to carry composite video between two devices, e.g. TV to the cable box.",
          cat: "netmed",
        },
        {
          prompt:
            "These cables use light from an LED or laser to transmit information through a glass fiber.",
          answer: "What are fiber optic cables?",
          hints:
            "Because these cables use light instead of electricity, it is immune to EMI. Additional benefits include greater range (many miles!), and greater bandwidth (peaking in the range of Terabytes per second!).",
          cat: "netmed",
        },
        {
          prompt:
            "This media contains eight individually insulated strands of copper wire inside each cable, and each pair is twisted together to reduce EMI.",
          answer: "What are Twisted Pair Cables?",
          hints:
            "This is the most popular type of physical LAN media. The number of twists determines how much EMI can be blocked; the tighter the twists, the more EMI is blocked.",
          cat: "netmed",
        },
        {
          prompt:
            "This type of fiber optic cable is used in short-range operations (e.g. routers to switches, switches to switches, servers to switches), with a larger core size (62.5 microns) to allow for multiple modes of light signaling.",
          answer: "What is Multimode Fiber?",
          hints: "",
          cat: "netmed",
        },
        {
          prompt:
            "This type of fiber optic cable is used in long-distance operations, with a smaller core size (10 microns) that allows for only a single mode of light signaling.",
          answer: "What is Single-Mode Fiber?",
          hints: "",
          cat: "netmed",
        },
        {
          prompt:
            "When using a mix of copper and fiber, this layer 1 device can convert fiber-based signals into alternative media types, e.g. Ethernet and Coaxial.",
          answer: "What is a Media Converter?",
          hints: "",
          cat: "netmed",
        },
        {
          prompt:
            "This type of transceiver can send and receive data, but not simultaneously; sending and receiving must take turns.",
          answer: "What is Half-Duplex?",
          hints:
            "Classic example: Walkie-Talkies. When one person holds down the 'talk' button, the other person cannot talk at the same time, they can only receive what the talking person is sending.",
          cat: "eth",
        },
        {
          prompt:
            "This type of transceiver can send and receive data simultaneously.",
          answer: "What is Full-Duplex?",
          hints:
            "Example: Modern telephones, where two parties can talk at the same time.",
          cat: "eth",
        },
        {
          prompt:
            "Ethernet devices have this built-in system that allows devices to communicate over the network almost whenever they want.",
          answer: "What is Carrier Sense Multiple Access/Collision Detect?",
          hints:
            "Carrier Sense: Listens to the wire, verifies it's not busy. Multiple Access: All devices have access at any time. Collision Detect: If two devices transmit at the same time, a collision occurs and is detected. Upon this detect, the two over-talking devices are assigned random intervals of time before they start transmitting. The device with the shortest random interval of time transmits first, and then the second device transmits after its time interval expires.",
          cat: "eth",
        },
        {
          prompt:
            "This is a concept, relating to collisions of communication, that delineates a network of all devices on a shared Ethernet segment, i.e. on the same cable or hub (layer 1 device).",
          answer: "What is a Collision Domain?",
          hints: "",
          cat: "eth",
        },
        {
          prompt:
            "The original Ethernet type, also called 10BASE-T, has a maximum speed of 10 Mbps and only comes in UTP.",
          answer: "What is Ethernet?",
          hints: "",
          cat: "eth",
        },
        {
          prompt: "This Ethernet type maxes out at 100 Mbps.",
          answer: "What is Fast Ethernet?",
          hints: "Also known as 100BASE-T.",
          cat: "eth",
        },
        {
          prompt: "This Ethernet type maxes out at 1000 Mbps (1 Gbps).",
          answer: "What is Gigabit Ethernet?",
          hints: "Also known as 1000BASE-T.",
          cat: "eth",
        },
        {
          prompt: "This Ethernet type maxes out at 10 Gbps.",
          answer: "What is 10 Gigabit Ethernet",
          hints: "Also known as 10GBASE-T",
          cat: "eth",
        },
        {
          prompt: "Success! You've made it this far!",
          answer: "Ready for a refresher course?",
          hints: "",
        },
      ],
      counter: 0,
      progress: 0,
    };
  },
  computed: {
    progressBar() {
      return this.progress;
    },
    cardOutput() {
      return this.output;
    },
    cardData() {
      return this.data[this.counter];
    },
    cardData2() {
      if (this.output == "Answer") {
        return this.data2[this.counter].prompt;
      } else {
        return this.data2[this.counter].answer;
      }
    },
  },
  methods: {
    randomizer(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    randomizeCounter() {
      this.counter = this.randomizer(0, this.data2.length - 1);
      this.progress = (this.counter / (this.data2.length - 1)) * 100;
    },
    showAnswer() {
      if (this.output == "Answer") {
        this.output = "Prompt";
      } else {
        this.output = "Answer";
      }
    },
    nextCard() {
      if (this.counter <= this.data2.length - 2) {
        this.counter++;
      } else {
        this.counter = 0;
      }
      this.progress = (this.counter / (this.data2.length - 1)) * 100;
    },
    prevCard() {
      if (this.counter == 0) {
        this.counter = this.data2.length - 1;
      } else {
        this.counter--;
      }
      this.progress = (this.counter / (this.data2.length - 1)) * 100;
    },
  },
});

app.mount("#trivia");
