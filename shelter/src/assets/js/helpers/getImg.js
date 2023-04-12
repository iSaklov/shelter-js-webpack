import image1 from "../../../assets/images/pets/jennifer.png"
import image2 from "../../../assets/images/pets/sophia.png"
import image3 from "../../../assets/images/pets/woody.png"
import image4 from "../../../assets/images/pets/scarlett.png"
import image5 from "../../../assets/images/pets/katrine.png"
import image6 from "../../../assets/images/pets/timmy.png"
import image7 from "../../../assets/images/pets/freddie.png"
import image8 from "../../../assets/images/pets/charly.png"

export default function getImg(petId) {
	switch (petId) {
		case 1:
			return image1
		case 2:
			return image2
		case 3:
			return image3
		case 4:
			return image4
		case 5:
			return image5
		case 6:
			return image6
		case 7:
			return image7
		case 8:
			return image8
	}
}
