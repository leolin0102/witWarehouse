__author__ = 'lin'

from pymongo import MongoClient

client = None

def get_mongo_client():
    global client
    if client is None:
        client = MongoClient()
    return client

def get_col(group, collection):
    return get_mongo_client()[group][collection]

def insert_or_update_entry(group, collection, entry, rid):
    col = get_col(group, collection)
    if col.find_one({'_id': rid}) is None:
        return col.insert_one(entry).inserted_id
    else:
        col.update_one({'_id': rid}, {'$inc': entry.__dict__})
        return rid

def query_entries(group, collection, query={}):
    col = get_col(group, collection)
    return col.find(query)

def delete_entries(group, collection, query={}):
    col = get_col(group, collection)
    return col.delete_many(query)
