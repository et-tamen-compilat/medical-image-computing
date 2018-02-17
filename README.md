# README

To compile the website, you need `pandoc`. To install on Macs:

```
brew install pandoc
```

To install on Ubuntu:
```
apt-get install ubuntu
```

To compile, first make the `compile.sh` file executable:
```
chmod +x compile.sh
```

Then, you won't need to do that again, and you can compile by doing (presuming you are in the root):
```
./compile.sh
```

To run the webserver, go to the `output` folder that is generated and start a python webserver:
```
python -m SimpleHTTPServer 8000
```
And go to http://localhost:8000.

If that doesn't work, try `python2`.