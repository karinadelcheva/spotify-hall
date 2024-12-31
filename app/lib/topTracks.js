import axios from "axios";

export async function getTopTracks(accessToken, user, limit = 10) {
    const url = `${process.env.LASTFM_BASE_URL}?method=user.gettoptracks&user=${user}&api_key=${accessToken}&format=json&limit=${limit}`;
    try {
        const response = await axios.get(url);
        return response.data.toptracks.track;
    } catch (error) {
        console.error('Error fetching top songs:', error);
        throw error;
    }
}


// {
//     streamable: { fulltrack: '0', '#text': '0' },
//     mbid: 'e97b53fa-4ba0-4bb4-b489-f39f9488b520',
//     name: 'Hands On',
//     image: [ [Object], [Object], [Object], [Object] ],
//     artist: {
//       url: 'https://www.last.fm/music/Kanye+West',
//       name: 'Kanye West',
//       mbid: ''
//     },
//     url: 'https://www.last.fm/music/Kanye+West/_/Hands+On',
//     duration: '203',
//     '@attr': { rank: '4' },
//     playcount: '182'
//   },