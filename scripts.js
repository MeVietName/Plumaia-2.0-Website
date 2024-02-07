import { createIcons, icons } from 'lucide';

// Caution, this will import all the icons and bundle them.
createIcons({ icons });

// Recommended way, to include only the icons you need.
import { createIcons, home, store, message-square-text, mail} from 'lucide';

createIcons({
  icons: {
    home,
    store,
    message-square-text,
    mail
  }
});