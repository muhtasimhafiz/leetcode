class EventedThing:
    def __init__(self):
        self._events = {}

    def on(self, event, callback):
        if event not in self._events:
            self._events[event] = []
        self._events[event].append(callback)

    def trigger(self, event, *args, **kwargs):
        callbacks = self._events.get(event, [])
        for callback in callbacks:
            callback(*args, **kwargs)

import unittest

class TestEventedThing(unittest.TestCase):
    def test_on_and_trigger(self):
        # Define a function to be called when the event occurs
        def handle_event(data):
            self.assertEqual(data, "some_data")

        # Create an instance of EventedThing
        evented_thing = EventedThing()

        # Register the handle_event function for the "some_event" event
        evented_thing.on("some_event", handle_event)

        # Trigger the "some_event" event
        evented_thing.trigger("some_event", data="some_data")

if __name__ == '__main__':
    unittest.main()

def handle_event(data):
    print("Event occurred with data:", data)

evented_thing = EventedThing()

evented_thing.on("some_event", handle_event)
evented_thing.trigger("some_event", data="some_data")
