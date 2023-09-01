from PIL import Image
import os

def rec_find(p):
    l = os.listdir(p)
    
    for x in l:
        if x == 'node_modules' or x[0] == '.':
            continue

        x = p + x

        if os.path.isdir(x):
            x += '/'
            rec_find(x)
        else:
            if not x.endswith('.jpg'):
                continue

            img = Image.open(x)
            print(f'Optimizing {x}...')
            img.save(x, optimize=True)
            
if __name__ == '__main__':
    rec_find('./')